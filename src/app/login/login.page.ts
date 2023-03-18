import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../interface/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onLogin(){
    this.auth.usrLogin(this.user).then((user:any)=>{
      if(user!=null && user.code ==undefined){
        console.log('Successfully logged in!');
        this.router.navigate(['/home-logged']);
      }
      else{
        if(user.code){
          if(user.code=='auth/wrong-password' || user.code =='auth/invalid-email' || user.code=='auth/argument-error'){
            //this.openModal(user);
            console.log('Usuario y/o contraseña incorrecta');
          }
        }
      }
    }).catch((error: any)=>{
      console.log(error);
    })

  }

  gotoRegister(){
    this.router.navigate(['/register'])
  }



}
