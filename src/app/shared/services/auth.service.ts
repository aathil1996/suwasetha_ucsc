import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState : any = null

  constructor(public afAuth: AngularFireAuth,
    public jwtHelper: JwtHelperService
    ) {
    this.afAuth.authState.subscribe(data => this.authState = data)
   }

   

   get authenticated(): boolean{
     return this.authState !== null
   }

   get currentUserID(): string{
     return this.authenticated ? this.authState.uid: null
   }

  login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
  }

  logout(){
    this.afAuth.auth.signOut()
  }
}
