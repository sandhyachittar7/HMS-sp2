import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Createpatient } from '../createpatient.model';
import { Doctor } from '../doctor.model';
import { InPatient } from '../in-patient.model';
import { Labtest } from '../labtest.model';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-inpatient',
  templateUrl: './inpatient.component.html',
  styleUrls: ['./inpatient.component.styl']
})
export class InpatientComponent implements OnInit {
  inpatGroup = new FormGroup({
    inPatientId : new FormControl(),
    patientId : new FormControl("",Validators.required),
    doctorId : new FormControl("",Validators.required),
    admissionDate : new FormControl("",Validators.required),
    labTestId: new FormControl("",Validators.required),
    roomId : new FormControl("",Validators.required)
  });
  constructor(@Inject(RestService) private srvc) { }

  inpatientList : InPatient[];
  patientList : Createpatient[]; 
  doctorList : Doctor[];
  labTestList : Labtest[];
  
  ngOnInit(): void {
    this.loaddata();
  }
loaddata(){
  this.srvc.getInPatient().subscribe(
        (res)=>{
            this.inpatientList=res as InPatient[];
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
saveInPatient():void {
  console.log(this.inpatGroup.value);
  this.srvc.saveInPatient(this.inpatGroup.value).subscribe(
    (res)=>{
        alert('InPatient Successfully Added')
        this.loaddata();
        this.inpatGroup.reset();
    },
    (err)=>{
      alert(JSON.stringify(err));
    }
  );
}
searchInPatient():void {
  var inpatId = this.inpatGroup.get('inPatientId').value;
  this.srvc.searchInPatient(inpatId).subscribe(
    (res)=>{
        this.inpatGroup.patchValue(res);
    },
    (err)=>{
        window.alert(JSON.stringify(err));
    }
  );
}
// deleteInPatient():void {
//   var inpatId = this.inpatGroup.get('inPatientId').value;
//   this.srvc.deleteInPatient(inpatId).subscribe(
//     (res)=>{
//         alert("InPatient deleted");
//         this.loaddata();
//         this.inpatGroup.reset();
//     },
//     (err)=>{
//         window.alert(JSON.stringify(err));
//     }
//   );
// }
updateInPatient():void {
  var inpatId = this.inpatGroup.get('inPatientId').value;
  this.srvc.updateInPatient(inpatId, this.inpatGroup.value).subscribe(
    (res)=>{
        alert("InPatient updated");
        this.loaddata();
        this.inpatGroup.reset();
    },
    (err)=>{
        window.alert(JSON.stringify(err));
    }
  );
  }
}
