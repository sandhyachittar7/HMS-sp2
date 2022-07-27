import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

 

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

 

  constructor(@Inject(Router) private rt) { }

 

  canActivate():boolean {
    if (localStorage.getItem("auth"))
      return true;
    else
    {
      this.rt.navigateByUrl("login");
      return false;
    }
      
  }
}