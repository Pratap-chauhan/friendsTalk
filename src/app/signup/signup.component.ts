import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  mail:string = '';
  password:string = '';
  constructor(private authService: SocialAuthService) { }
  login=true;

  ngOnInit() {

  }
  LoginUser()
  {
    console.log("eemm")
    if(this.mail=="ABC" && this.password == "123")
    {   
       alert("Welcome");
      }
    else{
      alert(" please Login");
    }  
  }

  SignUp()
  {
    this.login = false;
  }
  signInWithGoogle(): void {
    // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    // this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
 
  signOut(): void {
    // this.authService.signOut();
  }
}
