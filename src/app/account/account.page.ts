import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoHome(){
    this.router.navigate(['/home'])
  }

  //dos veces donde en una muestre tabs permitidos con sesion y otra con usuasiro anonimo
  

  gotoSaved(){
    this.router.navigate(['/saved'])
  }

  gotoLogin(){
    this.router.navigate(['/login'])
  }

  gotoRegister(){
    this.router.navigate(['/register'])
  }


}
