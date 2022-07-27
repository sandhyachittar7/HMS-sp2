import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  // sessionStorage:any;
//  userdisplay:string;
  constructor(@Inject(HttpClient) private client, @Inject(Router) private rt, @Inject(StatusService) private status) { }

  loginGroup = new FormGroup({
    UserName : new FormControl("",Validators.required),
    password : new FormControl("",Validators.required)
  });

  ngOnInit(): void {
  }
  validate():void {
    var UserName = this.loginGroup.get('UserName').value;
    var password=this.loginGroup.get('password').value;
    this.client.get("https://localhost:44302/api/Users/" + UserName + "/" + password).subscribe(
      (res)=>{
            alert("Login Successful");
            localStorage.setItem("access_token",res.token);
            localStorage.setItem("auth","true");
            localStorage.setItem("username",UserName);
            localStorage.setItem("access_userrole",res.role);
            
            this.status.logged=true;
            //sessionStorage.setItem('username',UserName);
            this.status.userrole = res.role;
            this.status.username = UserName;
            
      },
      (err)=>{
         alert("Login Failed");
        }
    );
      }

}
