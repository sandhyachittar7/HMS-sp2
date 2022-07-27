import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../doctor.model';
import { RestService } from '../rest.service';
 
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
 
  docGroup = new FormGroup({
    doctorId : new FormControl(),
    doctorName : new FormControl("",Validators.required),
    doctorFees:new FormControl("",Validators.required),
    departmentId : new FormControl("",Validators.required),
    
  });
 
constructor(@Inject(RestService) private srvc) { }
 
 doctorList : Doctor[];
  departmentList;
  ngOnInit(): void {
    this.loaddata();
  }
  loaddata(){
    this.srvc.getDepartments().subscribe(
      (res)=>{
        this.departmentList=res;
      },
      (err)=>{
        alert(JSON.stringify(err));
      }
    );
 
 
 
      this.srvc.getDoctors().subscribe(
        (res)=>{
            this.doctorList=res as Doctor[];
        },
        (err)=>{
            window.alert(JSON.stringify(err));
        }
      );
  }
  saveDoctor():void {
    console.log(this.docGroup.value);
    this.srvc.saveDoctor(this.docGroup.value).subscribe(
      (res)=>{
          alert('Doctor Successfully Added')
          this.loaddata();
          this.docGroup.reset();
      },
      (err)=>{
        alert(JSON.stringify(err));
      }
    );
  }
  searchDoctor():void {
    var docId = this.docGroup.get('doctorId').value;
    this.srvc.searchDoctor(docId).subscribe(
      (res)=>{
          this.docGroup.patchValue(res);
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
 
 
 
  deleteDoctor():void {
    var docId = this.docGroup.get('doctorId').value;
    this.srvc.deleteDoctor(docId).subscribe(
      (res)=>{
          alert("Doctor deleted");
          this.loaddata();
          this.docGroup.reset();
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
 
 
 
  updateDoctor():void {
    var docId = this.docGroup.get('doctorId').value;
    this.srvc.updateDoctor(docId, this.docGroup.value).subscribe(
      (res)=>{
          alert("Doctor updated");
          this.loaddata();
          this.docGroup.reset();
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
}