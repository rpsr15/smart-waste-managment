import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Form, NgForm} from "@angular/forms";
import {AuthenticationService} from "./services/authentication.service";

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  logStatus:boolean = false;
  isSignUp:boolean = false;
  username;
  password;
  authenticationService:AuthenticationService;
  currentUser = null;
  constructor(auth:AuthService, authenticationService:AuthenticationService){
    this.logStatus = auth.getLogStatus();
    this.authenticationService = authenticationService;
  }



    ngOnInit(){
        this.currentUser = localStorage.getItem('currentUser');
        if(this.currentUser){
            this.logStatus = true;
        }else{
            this.logStatus = false;
        }
    };


    onSubmitLogin(form: NgForm){
       this.logStatus = true;
        console.log("Hello login");
        // console.log(form.value);
        // console.log(form.value.email);
        // console.log(form.value.your_pass);
        this.authenticationService.login(form.value.email,form.value.your_pass);
           // this.authenticationService.test();
    }

    onSubmitSignUp(form: NgForm){


        console.log("Hello signup");
        console.log(form.value);
        // console.log(form.value.email);
        // console.log(form.value.your_pass);

    }

    signUpSelected(){
      this.isSignUp = true;
    }

    logInSelected(){
      this.isSignUp = false;
    }
}
