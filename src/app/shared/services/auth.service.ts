<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'
=======
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'
import { BehaviorSubject } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState : any = null
<<<<<<< HEAD

  constructor(public afAuth: AngularFireAuth) {
=======
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
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
    this.afAuth.authState.subscribe(data => this.authState = data)
   }

   get authenticated(): boolean{
     return this.authState !== null
   }

   get currentUserID(): string{
     return this.authenticated ? this.authState.uid: null
   }

<<<<<<< HEAD
  login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
=======

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
            this.router.navigate(["/doctor"])
          }
          else if(userRef.data().role == "clinicAdmin"){
            this.router.navigate(["/clinicAdmin"])

          }
          else if(userRef.data().role == "hospitalAdmin"){
            this.router.navigate(["/hospitalAdmin"])

          }
          else if(userRef.data().role == "hospitalAdmin"){
            this.router.navigate(["/hospitalAdmin"])

          }

          else if(userRef.data().role == "patient"){
            this.router.navigate(["/patient"])

          }
         
        })
      })
    }). catch((err) =>{
      this.toastr.error(err);
    })
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
  }

  logout(){
    this.afAuth.auth.signOut()
<<<<<<< HEAD
=======
    .then(()=>{
      this.toastr.success("user signed Out successfully");
      
      //set current user to null to be logged out
      this.currentUser = null;
      //set the listener to be null, for the UI to react
      this.setUserStatus(null);
      this.ngZone.run(() => this.router.navigate(["/"]));

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
              this.router.navigate(["/systemAdmin"])
            }
            else if(userRef.data().role == "doctor"){
              this.router.navigate(["/doctor"])
            }
            else if(userRef.data().role == "clinicAdmin"){
              this.router.navigate(["/clinicAdmin"])
  
            }
            else if(userRef.data().role == "hospitalAdmin"){
              this.router.navigate(["/hospitalAdmin"])
  
            }
            else if(userRef.data().role == "hospitalAdmin"){
              this.router.navigate(["/hospitalAdmin"])
  
            }
  
            else if(userRef.data().role == "patient"){
              this.router.navigate(["/patient"])
  
            }
            else{
              this.ngZone.run(() => this.router.navigate(["/"])); 
            }
          })
        })
      }
    })
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
  }
}
