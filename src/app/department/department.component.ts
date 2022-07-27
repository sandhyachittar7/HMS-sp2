import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from '../department.model';
import { RestService } from '../rest.service';
 
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  deptGroup = new FormGroup({
    departmentId : new FormControl(),
    departmentName : new FormControl("",Validators.required),
    
  });
 
  constructor(@Inject(RestService) private srvc) { }
  departmentList : Department[];
 
  ngOnInit(): void {
    this.loaddata();
  }
  loaddata(){
    this.srvc.getDepartments().subscribe(
      (res)=>{
          this.departmentList=res as Department[];
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
  saveDepartment():void {
    console.log(this.deptGroup.value);
    this.srvc.saveDepartment(this.deptGroup.value).subscribe(
      (res)=>{
          alert('Department Successfully Added')
          this.loaddata();
          this.deptGroup.reset();
      },
      (err)=>{
        alert(JSON.stringify(err));
      }
    );
  }
  searchDepartment():void {
    var deptId = this.deptGroup.get('departmentId').value;
    this.srvc.searchDepartment(deptId).subscribe(
      (res)=>{
          this.deptGroup.patchValue(res);
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
  deleteDepartment():void {
    var deptId = this.deptGroup.get('departmentId').value;
    this.srvc.deleteDepartment(deptId).subscribe(
      (res)=>{
          alert("Department deleted");
          this.loaddata();
          this.deptGroup.reset();
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
  updateDepartment():void {
    var deptId = this.deptGroup.get('departmentId').value;
    this.srvc.updateDepartment(deptId, this.deptGroup.value).subscribe(
      (res)=>{
          alert("Department updated");
          this.loaddata();
          this.deptGroup.reset();
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
 
}