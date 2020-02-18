import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'
import { BehaviorSubject } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState : any = null
  public currentUser: any;
  public userStatus: string;
  public userStatusChanges: BehaviorSubject<string> = new BehaviorSubject<string>(this.userStatus)
  users : AngularFireList<any>;

  setUserStatus(userStatus: any): void{
    this.userStatus = userStatus;
    this.userStatusChanges.next(userStatus);
  }

  constructor(public afAuth: AngularFireAuth, 
    private firebase: AngularFireDatabase,
     private router: Router, 
     private firestore: AngularFirestore,
     private ngZone: NgZone,
     private toastr: ToastrService) {
    this.afAuth.authState.subscribe(data => this.authState = data)
   }

   get authenticated(): boolean{
     return this.authState !== null
   }

   get currentUserID(): string{
     return this.authenticated ? this.authState.uid: null
   }

  //  register(email: string, password: string){
  //   this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //   .then((userResponse)=>{
  //     // add the user to the "users" database
  //     let user = {
  //      id: userResponse.user.uid,
  //      username: userResponse.user.email,
  //      role: "user",
  //     }
      
  //     //add the user to the database
  //     this.firestore.collection("users").add(user)
  //     .then(user => {
  //      user.get().then(x => {
  //        //return the user data
  //        console.log(x.data());
  //        this.currentUser = x.data();
  //        this.setUserStatus(this.currentUser);
  //        this.router.navigate(["/"]);
  //      })
  //     }).catch(err => {
  //       console.log(err);
  //     })
      
     
  //   })
  //   .catch((err)=>{
  //      console.log("An error ocurred: ", err);
  //   })

  //  }

  login(email: string, password: string){
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((user) => {
      this.firestore.collection("users").ref.where("email", "==", user.user.email).onSnapshot(snap =>{

      
        snap.forEach(userRef => {
          console.log("userRef", userRef.data());
          this.currentUser = userRef.data();
          this.setUserStatus(this.currentUser)
          if(userRef.data().role == "systemAdmin") {
            this.router.navigate(["/systemAdmin"])
          }
          else if(userRef.data().role == "doctor"){
            this.router.navigate(["/systemAdmin"])
          }
        })
      })
    }). catch((err) =>{
      this.toastr.error(err);
    })
  }

  logout(){
    this.afAuth.auth.signOut()
    .then(()=>{
      console.log("user signed Out successfully");
      //set current user to null to be logged out
      this.currentUser = null;
      //set the listenener to be null, for the UI to react
      this.setUserStatus(null);
      this.ngZone.run(() => this.router.navigate(["/login"]));

    }).catch((err) => {
      console.log(err);
    })
  }

  userChanges(){
    this.afAuth.auth.onAuthStateChanged(currentUser => {
      if(currentUser){
        this.firestore.collection("users").ref.where("email", "==", currentUser.email).onSnapshot(snap =>{
          snap.forEach(userRef => {
            this.currentUser = userRef.data();
            //setUserStatus
            this.setUserStatus(this.currentUser);
            console.log(this.userStatus)
            
            if(userRef.data().role == "systemAdmin") {
             this.ngZone.run(() => this.router.navigate(["/systemAdmin"]));
            }
            else if(userRef.data().role == "doctor"){
             this.ngZone.run(() => this.router.navigate(["/doctor"])); 
            }
          })
        })
      }else{
        //this is the error you where looking at the video that I wasn't able to fix
        //the function is running on refresh so its checking if the user is logged in or not
        //hence the redirect to the login
        this.ngZone.run(() => this.router.navigate(["/login"]));
      }
    })
  }
}
