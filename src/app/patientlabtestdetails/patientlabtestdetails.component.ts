import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Createpatient } from '../createpatient.model';
import { Doctor } from '../doctor.model';
import { Labtest } from '../labtest.model';
import { PatientLabTestDetails } from '../patient-lab-test-details.model';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-patientlabtestdetails',
  templateUrl: './patientlabtestdetails.component.html',
  styleUrls: ['./patientlabtestdetails.component.css']
})
export class PatientlabtestdetailsComponent implements OnInit {

  plabGroup = new FormGroup({
    id : new FormControl(),
    labTestId: new FormControl("",Validators.required),
    testDate:new FormControl("",Validators.required),
    doctorId : new FormControl("",Validators.required),
    patientId : new FormControl("",Validators.required),
  });
  constructor(@Inject(RestService) private srvc) { }

  PatientLabTestDetailsList : PatientLabTestDetails[];
  patientList : Createpatient[]; 
  doctorList : Doctor[];
  labTestList : Labtest[];
  
  ngOnInit(): void {
    this.loaddata();
  }
  loaddata(){

    this.srvc.getPatientLabTestDetails().subscribe(
      (res)=>{
          this.PatientLabTestDetailsList=res as PatientLabTestDetails[];
      },
      (err)=>{
        window.alert(JSON.stringify(err));
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

    
      this.srvc.getLabtest().subscribe(
          (res)=>{
              this.labTestList=res as Labtest[];
          },
          (err)=>{
              window.alert(JSON.stringify(err));
          }
        );
    
        
    this.srvc.getPatient().subscribe(
      (res)=>{
          this.patientList=res as Createpatient[];
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
      savePatientLabTestDetails():void {
      console.log(this.plabGroup.value);
   this.srvc.savePatientLabTestDetails(this.plabGroup.value).subscribe(
      (res)=>{
          alert('PatientLabTestDetails Successfully Added')
          this.loaddata();
          this.plabGroup.reset();
      },
      (err)=>{
        alert(JSON.stringify(err));
      }
    );
  }
  searchPatientLabTestDetails():void {
    var pId = this.plabGroup.get('id').value;
     this.srvc.searchPatientLabTestDetails(pId).subscribe(
    
    (res)=>{
          this.plabGroup.patchValue(res);
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
 
 
 
  deletePatientLabTestDetails():void {
    var pId = this.plabGroup.get('id').value;
    this. srvc.deletePatientLabTestDetails(pId).subscribe(
      (res)=>{
          alert("PatientLabTestDetails deleted");
          
          this.loaddata();
          this.plabGroup.reset();
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
 
 
 
  updatePatientLabTestDetails():void {
    var pId = this.plabGroup.get('id').value;
    this.srvc.updatePatientLabTestDetails(pId, this.plabGroup.value).subscribe(
      (res)=>{
          alert("PatientLabTestDetails updated");
          this.loaddata();
          this.plabGroup.reset();
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
}



