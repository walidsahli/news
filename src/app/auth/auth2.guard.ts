import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {
  constructor(public router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (JSON.parse(localStorage.getItem('currentuser'))==null)
      return true
    else {
      this.router.navigateByUrl('/dashboard')
      return false
    }
  }
}
