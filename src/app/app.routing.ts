import { RouterModule, Routes } from "@angular/router";
import { CreatepatientComponent } from "./createpatient/createpatient.component";
import { DepartmentComponent } from "./department/department.component";
import { DisplaypatientComponent } from "./displaypatient/displaypatient.component";
import { DoctorComponent } from "./doctor/doctor.component";
import { GuardService } from "./guard.service";
import { InBillComponent } from "./inbill/inbill.component";
import { InpatientComponent } from "./inpatient/inpatient.component";
import { LabtestComponent } from "./labtest/labtest.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { OutbillComponent } from "./outbill/outbill.component";
import { OutpatientComponent } from "./outpatient/outpatient.component";
import { PatientlabtestdetailsComponent } from "./patientlabtestdetails/patientlabtestdetails.component";
import { RegisterComponent } from "./register/register.component";
import { RoomComponent } from "./room/room.component";
import { RoomtypeComponent } from "./roomtype/roomtype.component";


var routes : Routes=[
    {path:"register", component:RegisterComponent},
    {path:"login", component:LoginComponent},
    {path:"logout", component:LogoutComponent},
    {path:"department", component:DepartmentComponent},
    {path:"doctor", component:DoctorComponent},
    {path:"labtest", component:LabtestComponent},
    {path:"room", component:RoomComponent},
    {path:"roomtype", component:RoomtypeComponent},
    {path:"inpatient", component:InpatientComponent},
    {path:"outpatient",component:OutpatientComponent},
    {path:"patientlabtestdetails",component:PatientlabtestdetailsComponent},
    {path:"createpatient",component:CreatepatientComponent},
    {path:"displaypatient",component:DisplaypatientComponent},
    {path:"inbill",component:InBillComponent},
    {path:"outbill",component:OutbillComponent},
    {path:"", redirectTo:"", pathMatch:"full"}
  ];
  export const routing = RouterModule.forRoot(routes);