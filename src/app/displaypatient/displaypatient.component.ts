import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Displaypatient } from '../displaypatient.model';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-displaypatient',
  templateUrl: './displaypatient.component.html',
  styleUrls: ['./displaypatient.component.styl']
})
export class DisplaypatientComponent implements OnInit {

  patGroup = new FormGroup({
    patientId : new FormControl(),
    patientName : new FormControl("",Validators.required),
    age : new FormControl("",Validators.required),
    weight : new FormControl(""),
    gender: new FormControl("",Validators.required),
    address: new FormControl("",Validators.required),
    phoneNumber : new FormControl("",Validators.required),
    disease : new FormControl(""),
    patientType : new FormControl(""),
    
  });
  constructor(@Inject(RestService) private srvc) { }
  patientList:Displaypatient[];

  ngOnInit(): void {
    this.displayPatient();
    
  }
 
   
     displayPatient(){
    
    this.srvc.getPatient().subscribe(
      (res)=>{
          this.patientList=res;
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }

  deletePatient(patId):void {
    // var patId = this.patGroup.get('patientId').value;
    this.srvc.deletePatient(patId).subscribe(
      (res)=>{
          alert("Patient deleted");
          // this.displayPatient();
             
          
          this.patGroup.reset();
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
}
