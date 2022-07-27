import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Outbill } from '../outbill.model';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-outbill',
  templateUrl: './outbill.component.html',
  styleUrls: ['./outbill.component.styl']
})
export class OutbillComponent implements OnInit {
  outbillGroup = new FormGroup({
    billId : new FormControl(),
    outPatientId : new FormControl("",Validators.required),
     doctorFees  : new FormControl("",Validators.required),
    labCharges : new FormControl("",Validators.required),
    totalAmount : new FormControl("",Validators.required)
    });
   
  // doctorFees: any;
  // labCharges: any;
  // result: any;
  // outbill: any;
  constructor(@Inject(RestService) private srvc,@Inject(Router) private rt) { }
  outBillList : Outbill[];


  ngOnInit(): void {
    this.loaddata();
  }
  loaddata(){
    this.srvc.getOutBill().subscribe(
        (res)=>{
            this.outBillList=res as Outbill[];
        },
        (err)=>{
            window.alert(JSON.stringify(err));
        }
      );
  }

    saveOutBill():void {
    console.log(this.outbillGroup.value);
    this.srvc.saveOutBill(this.outbillGroup.value).subscribe(
      (res)=>{
          alert('Outbill Successfully Added')
          this.loaddata();
          this.outbillGroup.reset();
      },
      (err)=>{
        alert(JSON.stringify(err));
      }
    );
  }

searchOutBill():void{
    var outbillId = this.outbillGroup.get('billId').value;
    this.srvc.searchOutBill(outbillId).subscribe(
      (res)=>{
          this.outbillGroup.patchValue(res);
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }

//  deleteOutbill():void{
//     var outbillId = this.outbillGroup.get('billId').value;
//     this.srvc.deleteOutbill(outbillId).subscribe(
//       (res)=>{
//           alert("Outbill deleted");
//           this.loaddata();
//           this.outbillGroup.reset();
//       },
//       (err)=>{
//           window.alert(JSON.stringify(err));
//       }
calculateamount(outbill:any):string{
    
  return outbill.doctorFees+outbill.labCharges;
}
calculatetotal():void{
  debugger;
  var a= this.outbillGroup;
  this.outbillGroup.patchValue({
    totalAmount : parseInt(this.outbillGroup.value.doctorFees) + parseInt(this.outbillGroup.value.labCharges)
  } )
   }



updateOutBill():void {
    var outbillId = this.outbillGroup.get('billId').value;
    this.srvc.updateOutBill(outbillId, this.outbillGroup.value).subscribe(
      (res)=>{
          alert("Outbill updated");
          this.loaddata();
          this.outbillGroup.reset();
      },
      (err)=>{
          window.alert(JSON.stringify(err));
      }
    );
}

    // calculate(): void{
    //   var Add = this.outbillGroup.get('billId').value;
    // this.srvc.Calculate(Add, this.outbillGroup.value,).subscribe(
    //   (res)=>{
    //     var val1 = this.outbill.doctorFees;
    //     var val2 =this.outbill.labCharges;
    //     let result=0;
    //     result= val1+val2;
  
   
    }
  
  

    
  
  


