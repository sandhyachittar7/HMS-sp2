import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Inbill } from '../inbill.model';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-inbill',
  templateUrl: './inbill.component.html',
  styleUrls: ['./inbill.component.styl']
})
export class InBillComponent implements OnInit {
  
  inBillGroup = new FormGroup({
    billId : new FormControl(),
    inPatientId:new FormControl("",Validators.required),
    doctorFees:new FormControl("",Validators.required),
    operationCharges:new FormControl("",Validators.required),
    roomCharges:new FormControl("",Validators.required),
    medicineCharges:new FormControl("",Validators.required),
    labCharges:new FormControl("",Validators.required),
    totalAmount :new FormControl("",Validators.required)
  });
  constructor(@Inject(RestService) private srvc, @Inject(Router) private rt) { }

  inBillList : Inbill[];

  ngOnInit(): void {
    this.loaddata();
  }
  loaddata(){
    this.srvc.getInBill().subscribe(
          (res)=>{
              this.inBillList=res as Inbill[];
          },
          (err)=>{
              window.alert(JSON.stringify(err));
          }
        );
  }
  saveInBill():void {
    console.log(this.inBillGroup.value);
    this.srvc.saveInBill(this.inBillGroup.value).subscribe(
      (res)=>{
          alert('InBill Successfully Added')
          this.loaddata();
          this.inBillGroup.reset();
      },
      (err)=>{
        alert(JSON.stringify(err));
      }
    );
  }
  searchInBill():void {
    var inbillId = this.inBillGroup.get('billId').value;
    this.srvc.searchInBill(inbillId).subscribe(
      (res)=>{
          this.inBillGroup.patchValue(res);
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
  // deleteInBill():void {
  //   var inbillId = this.inBillGroup.get('billId').value;
  //   this.srvc.deleteInBill(inbillId).subscribe(
  //     (res)=>{
  //         alert("InBill deleted");
  //         this.loaddata();
  //         this.inBillGroup.reset();
  //     },
  //     (err)=>{
  //         window.alert(JSON.stringify(err));
  //     }
  //   );
  // }
  calculateamount(bill:any):string{
    
    return bill.doctorFees+bill.operationCharges+bill.medicineCharges+bill.roomCharges+bill.labCharges;
  }
  calculatetotal():void{
    debugger;
    var a= this.inBillGroup;
    this.inBillGroup.patchValue({
      totalAmount : parseInt(this.inBillGroup.value.doctorFees) + parseInt(this.inBillGroup.value.operationCharges) + parseInt(this.inBillGroup.value.medicineCharges) + parseInt(this.inBillGroup.value.roomCharges) + parseInt(this.inBillGroup.value.labCharges)
    })
  }
  updateInBill():void {
    var inbillId = this.inBillGroup.get('billId').value;
    this.srvc.updateInBill(inbillId, this.inBillGroup.value).subscribe(
      (res)=>{
          alert("Inbill updated");
          this.loaddata();
          this.inBillGroup.reset();
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
    }
    // inbill(): void { 
    //   (res)=>{
    //     this.rt.navigateByUrl("inbill");
    //   }
      
    // }

}
