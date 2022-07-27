import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Createpatient } from '../createpatient.model';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrls: ['./createpatient.component.styl']
})
export class CreatepatientComponent implements OnInit {

  patGroup = new FormGroup({
    patientId : new FormControl(),
    patientName : new FormControl("",Validators.required),
    age : new FormControl("",Validators.required),
    weight : new FormControl(""),
    gender: new FormControl("",Validators.required),
    address: new FormControl("",Validators.required),
    phoneNumber : new FormControl("",[Validators.required,Validators.minLength(10)]),
    disease : new FormControl(""),
    patientType : new FormControl(""),
    // doctorId: new FormControl("")
  });

  constructor(@Inject(RestService) private srvc, @Inject(Router) private rt) { }
  patientList : Createpatient[];
  // doctorList;
  ngOnInit(): void {
    this.loaddata();
  }
loaddata(){
  // this.client.get("https://localhost:44302/api/Doctors").subscribe(
  //     (res)=>{
  //       this.doctorList=res;
  //     },
  //     (err)=>{
  //       alert(JSON.stringify(err));
  //     }
  //   );


      this.srvc.getPatient().subscribe(
        (res)=>{
            this.patientList=res as Createpatient[];
        },
        (err)=>{
            window.alert(JSON.stringify(err));
        }
      );
  }
  savePatient():void {
    console.log(this.patGroup.value);
    this.srvc.savePatient(this.patGroup.value).subscribe(
      (res)=>{
          alert('Patient Successfully Added')
          this.loaddata();
          this.patGroup.reset();
      },
      (err)=>{
        alert(JSON.stringify(err));
      }
    );
    // this.rt.navigateByUrl('displaypatient');
    this.loaddata();
  }
  searchPatient():void {
    var patId = this.patGroup.get('patientId').value;
    this.srvc.searchPatient(patId).subscribe(
      (res)=>{
          this.patGroup.patchValue(res);
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }

  // deletePatient():void {
  //   var patId = this.patGroup.get('patientId').value;
  //   this.client.delete("https://localhost:44302/api/Patients/" + patId).subscribe(
  //     (res)=>{
  //         alert("Patient deleted");
  //         this.loaddata();
  //         this.patGroup.reset();
  //     },
  //     (err)=>{
  //         window.alert(JSON.stringify(err));
  //     }
  //   );
  // }

  updatePatient():void {
    var patId = this.patGroup.get('patientId').value;
    this.srvc.updatePatient(patId, this.patGroup.value).subscribe(
      (res)=>{
          alert("Patient updated");
          this.loaddata();
          this.patGroup.reset();
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
    // this.rt.navigateByUrl('displaypatient');
    this.loaddata();
  }

}
