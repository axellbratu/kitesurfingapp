import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';
import { Userpayload,loginIds } from '../services/payloads/userpayload';
import { GetuserService } from '../services/getuser.service';
import { compileNgModule } from '@angular/compiler';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  //formgroup declaration for input handling
  loginForm: FormGroup;

  //Login flag to display user not found message
  notLogged:boolean;

  //event emitter to update html component 
  @Output() logCheck:EventEmitter<boolean>= new EventEmitter();
  
  

  constructor(private service: LoginServiceService, private serv: GetuserService, private router:Router) {
  }

  ngOnInit(): void {
    //instantiate FormGroup in order to get the data entered
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });

    //login flag attribution to hide failed login message
    this.notLogged=false;
  }

  onLogin() {
    //using the login service in order to get credentials
    this.service.doLogin(this.loginForm.value).subscribe(res => {

      this.serv.getUserData(res as loginIds).subscribe(result => {
        //setting local storage variable in place of jwt token for authentication
        localStorage.setItem('loginAvatar',result.avatar);
        //redirecting to dashboard. Should have used authguards here
        this.router.navigateByUrl('/dashboard');
      }
    ,error=>{
      //if login fails flag gets triggered and message gets displayed
      this.notLogged=true;
      this.logCheck.emit(this.notLogged);
    });

    
    });
  }
}
