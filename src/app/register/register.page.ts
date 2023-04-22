import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserCredential } from 'firebase/auth';
import firebase from 'firebase/compat';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../interface/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  
  user: User = new User();

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onRegister(){
    this.auth.onRegister(this.user).then(user=>{
      if(user){
        console.log('Successfully created user!');
        this.router.navigate(['/home-logged']);
      }
    }).catch(error=>{
      console.log('Error al crear usuario!');
    })

  } 
  
}
