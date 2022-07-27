import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.styl']
})
export class LogoutComponent implements OnInit {

  constructor(@Inject(StatusService) private status, @Inject(Router) private rt) { localStorage.removeItem("auth");
  this.status.logged=false;
this.status.userrole= '';
localStorage.removeItem("username");
  this.rt.navigateByUrl("login") ;

 }

  ngOnInit(): void {
  }

}


