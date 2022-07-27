import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Inject, Injectable } from '@angular/core';
import { Outbill } from './outbill.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(@Inject(HttpClient) private client) {​​​​​​ }​​​​​

 baseurl="https://localhost:44302/api/";
//Department
 getDepartments() {​​​​​​ 
 return this.client.get(this.baseurl+'Departments/');
}
saveDepartment(deptGroup:any){​​​​​​ 
 return this.client.post(this.baseurl+'Departments/',deptGroup);
}​​​​​​
deleteDepartment(deptId){​​​​​​ 
 return this.client.delete(this.baseurl+'Departments/'+ deptId);
}​​​​​​
updateDepartment(deptId:number,deptGroup:any){​​​​​​ 
 return this.client.put(this.baseurl+'Departments/' + deptId,deptGroup);
}​​​​​​
searchDepartment(deptId:number){
​​​​​​  return this.client.get(this.baseurl+'Departments/' + deptId);
}
//Doctor
getDoctors() {​​​​​​ 
  return this.client.get(this.baseurl+'Doctors/');
 }
 saveDoctor(docGroup:any){​​​​​​ 
  return this.client.post(this.baseurl+'Doctors/',docGroup);
 }​​​​​​
 deleteDoctor(docId){​​​​​​ 
  return this.client.delete(this.baseurl+'Doctors/' + docId);
 }​​​​​​
 updateDoctor(docId:number,docGroup:any){​​​​​​ 
  return this.client.put(this.baseurl+'Doctors/' + docId,docGroup);
 }​​​​​​
 searchDoctor(docId:number){
 ​​​​​​  return this.client.get(this.baseurl+'Doctors/'+ docId);
 }
//LabTest
getLabtest() {​​​​​​ 
  return this.client.get(this.baseurl+'LabTests/');
 }
 saveLabTest(labtestGroup:any){​​​​​​ 
  return this.client.post(this.baseurl+'LabTests/',labtestGroup);
 }​​​​​​
 deleteLabTest(labTestId){​​​​​​ 
  return this.client.delete(this.baseurl+'LabTests/' + labTestId);
 }​​​​​​
 updateLabTest(labTestId:number,labtestGroup:any){​​​​​​ 
  return this.client.put(this.baseurl+'LabTests/' + labTestId,labtestGroup);
 }​​​​​​
 searchLabTest(labTestId:number){
 ​​​​​​  return this.client.get(this.baseurl+'LabTests/' + labTestId);
 }
 //roomtype

getRoomType(){​​​​​​ 
  return this.client.get(this.baseurl+'RoomTypes/');
 }
 saveRoomType(roomtypeGroup:any){​​​​​​ 
  return this.client.post(this.baseurl+'RoomTypes/',roomtypeGroup);
 }​​​​​​
 deleteRoomType(roomTypeId){​​​​​​ 
  return this.client.delete(this.baseurl+'RoomTypes/' + roomTypeId);
 }​​​​​​
 updateRoomType(roomTypeId:number,roomtypeGroup:any){​​​​​​ 
  return this.client.put(this.baseurl+'RoomTypes/' + roomTypeId,roomtypeGroup);
 }​​​​​​
 searchRoomType(roomTypeId:number){
 ​​​​​​  return this.client.get(this.baseurl+'RoomTypes/' + roomTypeId);
 }
 //Room
 getRoom() {​​​​​​ 
  return this.client.get(this.baseurl+'Rooms/');
 }
 saveRoom(rmGroup:any){​​​​​​ 
  return this.client.post(this.baseurl+'Rooms/', rmGroup);
 }​​​​​​
 deleteRoom(rmId){​​​​​​ 
  return this.client.delete(this.baseurl+'Rooms/' + rmId);
 }​​​​​​
 updateRoom(rmId:number,rmGroup:any){​​​​​​ 
  return this.client.put(this.baseurl+'Rooms/' + rmId,rmGroup);
 }​​​​​​
 searchRoom(rmId:number){
 ​​​​​​  return this.client.get(this.baseurl+'Rooms/' + rmId);
 }

 //inpatient
 getInPatient() {​​​​​​ 
  return this.client.get(this.baseurl+'Inpatients/');
 }
 saveInPatient(inpatGroup:any){​​​​​​ 
  return this.client.post(this.baseurl+'Inpatients/', inpatGroup);
 }​​​​​​
 deleteInPatient(inpatId){​​​​​​ 
  return this.client.delete(this.baseurl+'Inpatients/' + inpatId);
 }​​​​​​
 updateInPatient(inpatId:number,inpatGroup:any){​​​​​​ 
  return this.client.put(this.baseurl+'Inpatients/' + inpatId,inpatGroup);
 }​​​​​​
 searchInPatient(inpatId:number){
 ​​​​​​  return this.client.get(this.baseurl+'Inpatients/' + inpatId);
 }

 //outpatient
 getOutPatient() {​​​​​​ 
  return this.client.get(this.baseurl+'Outpatients/');
 }
 saveOutPatient(outPatientGroup:any){​​​​​​ 
  return this.client.post(this.baseurl+'Outpatients/', outPatientGroup);
 }​​​​​​
 deleteOutPatient(outPatientId){​​​​​​ 
  return this.client.delete(this.baseurl+'Outpatients/' + outPatientId);
 }​​​​​​
 updateOutPatient(outPatientId:number,outPatientGroup:any){​​​​​​ 
  return this.client.put(this.baseurl+'Outpatients/' + outPatientId,outPatientGroup);
 }​​​​​​
 searchOutPatient(outPatientId:number){
 ​​​​​​  return this.client.get(this.baseurl+'Outpatients/' + outPatientId);
 }

 //patientlabtestdetails
 getPatientLabTestDetails() {​​​​​​ 
  return this.client.get(this.baseurl+'Patientlabtestdetails/');
 }
 savePatientLabTestDetails(plabGroup:any){​​​​​​ 
  return this.client.post(this.baseurl+'Patientlabtestdetails/', plabGroup);
 }​​​​​​
 deletePatientLabTestDetails(Id){​​​​​​ 
  return this.client.delete(this.baseurl+'Patientlabtestdetails/' + Id);
 }​​​​​​
 updatePatientLabTestDetails(Id:number,plabGroup:any){​​​​​​ 
  return this.client.put(this.baseurl+'Patientlabtestdetails/' + Id,plabGroup);
 }​​​​​​
 searchPatientLabTestDetails(Id:number){
 ​​​​​​  return this.client.get(this.baseurl+'Patientlabtestdetails/' + Id);
 }

 //createpatient
 getPatient() {​​​​​​ 
  return this.client.get(this.baseurl+'patients/');
 }
 savePatient(patGroup:any){​​​​​​ 
  return this.client.post(this.baseurl+'patients/', patGroup);
 }​​​​​​
 ​​​​​​
 updatePatient(patId:number,patGroup:any){​​​​​​ 
  return this.client.put(this.baseurl+'patients/' + patId,patGroup);
 }​​​​​​
 searchPatient(patId:number){
 ​​​​​​  return this.client.get(this.baseurl+'patients/' + patId);
 }

 //Displaypatient
 deletePatient(patientId){​​​​​​ 
  return this.client.delete(this.baseurl+'patients/' + patientId);
//InBill



}
getInBill() {​​​​​​ 
  return this.client.get(this.baseurl+'InBills/');
 }
 saveInBill(inBillGroup:any){​​​​​​ 
  return this.client.post(this.baseurl+'InBills/', inBillGroup);
 }​​​​​​
 ​​​​​​
 updateInBill(billId:number,inBillGroup:any){​​​​​​ 
  return this.client.put(this.baseurl+'InBills/' + billId,inBillGroup);
 }
 searchInBill(billId:number){
  ​​​​​​  return this.client.get(this.baseurl+'InBills/' + billId);
  }
 
  //Displaypatient
  deleteInBill(billId:number,inBillGroup:any){​​​​​​ 
   return this.client.put(this.baseurl+'InBills/' + billId,inBillGroup);

​​​​​​​​​​​​}

//OutBill
getOutBill() {​​​​​​ 
  return this.client.get(this.baseurl+'OutBills/');
 }
 saveOutBill(outbillGroup:any){​​​​​​ 
  return this.client.post(this.baseurl+'OutBills/', outbillGroup);
 }​​​​​​
 ​​​​​​
 updateOutBill(billId:number,outbillGroup:any){​​​​​​ 
  return this.client.put(this.baseurl+'OutBills/' + billId,outbillGroup);
 }
 searchOutBill(billId:number){
  ​​​​​​  return this.client.get(this.baseurl+'OutBills/' + billId);
  }

//   calculate():number{
// let totalAmount=0;
// alert(totalAmount);
// this.outBillList.map((a:any)=>{(any.outbill)
//   totalAmount+=(a.doctorFees+a.labCharges)})
// return totalAmount;
//   }
  }