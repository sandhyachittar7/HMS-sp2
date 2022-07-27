import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Labtest } from '../labtest.model';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-labtest',
  templateUrl: './labtest.component.html',
  styleUrls: ['./labtest.component.css']
})
export class LabtestComponent implements OnInit {
  labtestGroup = new FormGroup({
    labTestId : new FormControl(),
    labTestType : new FormControl("",Validators.required),
    price : new FormControl("",Validators.required)
  });
  constructor(@Inject(RestService) private srvc) { }

  labTestList : Labtest[];
  
  ngOnInit(): void {
     this.loaddata();
  }
  loaddata(){
    this.srvc.getLabtest().subscribe(
        (res)=>{
            this.labTestList=res as Labtest[];
        },
        (err)=>{
            window.alert(JSON.stringify(err));
        }
      );
  }

  saveLabTest():void {
    console.log(this.labtestGroup.value);
    this.srvc.saveLabTest(this.labtestGroup.value).subscribe(
      (res)=>{
          alert('LabTest Successfully Added')
          this.loaddata();
          this.labtestGroup.reset();
      },
      (err)=>{
        alert(JSON.stringify(err));
      }
    );
  }

  searchLabTest():void{
    var labTestId = this.labtestGroup.get('labTestId').value;
    this.srvc.searchLabTest(labTestId).subscribe(
      (res)=>{
          this.labtestGroup.patchValue(res);
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }

    deleteLabTest():void{
    var labTestId = this.labtestGroup.get('labTestId').value;
    this.srvc.deleteLabTest(labTestId).subscribe(
      (res)=>{
          alert("LabTest deleted");
          this.loaddata();
          this.labtestGroup.reset();
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }

  updateLabTest():void {
    var labTestId = this.labtestGroup.get('labTestId').value;
    this.srvc.updateLabTest(labTestId, this.labtestGroup.value).subscribe(
      (res)=>{
          alert("LabTest updated");
          this.loaddata();
          this.labtestGroup.reset();
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
  
}