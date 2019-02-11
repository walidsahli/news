import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public mail : string 
  public pass : string

  constructor(private afauthserv: AuthService) { }

  SignUp(){
    this.afauthserv.SignUpMP(this.mail,this.pass)
  }

  ngOnInit() {
  }

}
