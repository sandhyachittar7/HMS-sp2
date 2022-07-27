import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../register.model';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.styl']
})
export class RegisterComponent implements OnInit {
  regGroup = new FormGroup({
    userId : new FormControl(),
    userName : new FormControl("",Validators.required),
    email : new FormControl("",Validators.required),
    password : new FormControl("",Validators.required),
    roleId : new FormControl("",Validators.required),
    confirmPassword: new FormControl("",Validators.required)
  });
  constructor(@Inject(HttpClient) private client, @Inject(Router) private rt) { }
 userList:Register[];
 roleList;
  ngOnInit(): void {
  }
//  this.loaddata();
  
  // loaddata(){
  //   this.srvc.getRoles().subscribe(
  //     (res)=>{
  //       this.roleList=res;
  //     },
  //     (err)=>{
  //     alert(JSON.stringify(err));
  //     }
  //   );
  // }
 

  saveUser():void {
    console.log(this.regGroup.value);
    this.client.post("https://localhost:44302/api/Users",this.regGroup.value).subscribe(
      (res)=>{
          alert('Registration Successfully Completed')
          this.regGroup.reset();
          this.rt.navigateByUrl("login"); 
      },
      (err)=>{
        alert(JSON.stringify(err));
      }
    );
  }

  }

