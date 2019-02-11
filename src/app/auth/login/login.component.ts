import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public mail : string
  public pass : string
  constructor(private authserv: AuthService) { }

  glog() {
    this.authserv.loginG()
  }

  SignIn(){
    this.authserv.SignInMP(this.mail,this.pass)
  }
  FBlog(){
    this.authserv.loginFB()
  }

  ngOnInit() {
    
  }

}