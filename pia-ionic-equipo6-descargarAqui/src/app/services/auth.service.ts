import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app"
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { User } from '../interface/user';
//import { auth } from "firebase/app";

const firebaseApp = initializeApp(environment.firebaseConfig);

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public isLogged: any = false;
  auth!: Auth;

  constructor(private afAuth: AngularFireAuth) {
    this.auth = getAuth(firebaseApp);

    onAuthStateChanged(this.auth, user => {
      if(user!= undefined || user != null){
        this.isLogged = user;
      }
    });
  }

  loggedIn(){
    return this.isLogged;
  }

  getAuth() {
    return this.afAuth;
  }

  usrLogin(user: User): Promise<any>{
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }

  onRegister(user: User): Promise<any>{
    return  createUserWithEmailAndPassword(this.auth, user.email, user.password);
  }   
}
