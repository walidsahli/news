import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { DBinterService } from './dbinter.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afauth: AngularFireAuth , private router: Router , private db: DBinterService, private zone: NgZone) { }

  loginG() {
    this.afauth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(x => localStorage.setItem('currentuser', JSON.stringify(x.user)))
    .then(() => this.zone.run(() => this.router.navigateByUrl('dashboard')));

  }
  SignInMP( mail: string , pass: string) {
    this.afauth.auth.signInWithEmailAndPassword(mail, pass)
    .then(x => localStorage.setItem('currentuser', JSON.stringify(x.user)))
    .then(() => this.zone.run(() => this.router.navigateByUrl('dashboard')));
  }
  SignUpMP( mail: string , pass: string) {
    this.afauth.auth.createUserWithEmailAndPassword(mail, pass)
    .then(() => this.zone.run(() => this.router.navigateByUrl('dashboard')));
  }
  logout() {
    this.afauth.auth.signOut().then(() =>
    localStorage.removeItem('currentuser')).then(() =>
    this.zone.run(() => this.router.navigateByUrl('auth')));
  }
  loginFB() {
    this.afauth.auth.signInWithPopup(new auth.FacebookAuthProvider())
    .then(x => localStorage.setItem('currentuser', JSON.stringify(x.user)))
    .then(() => this.zone.run(() => this.router.navigateByUrl('dashboard')));
  }
}
