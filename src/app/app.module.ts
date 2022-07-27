import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DepartmentComponent } from './department/department.component';
import { DoctorComponent } from './doctor/doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {routing} from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { RegisterComponent } from "./register/register.component";
import { ParentComponent } from './parent/parent.component';
import { LabtestComponent } from './labtest/labtest.component';
import { RoomComponent } from './room/room.component';
import { RoomtypeComponent } from './roomtype/roomtype.component';
import { InpatientComponent } from './inpatient/inpatient.component';
import { OutpatientComponent } from './outpatient/outpatient.component';
import { PatientlabtestdetailsComponent } from './patientlabtestdetails/patientlabtestdetails.component';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { DisplaypatientComponent } from './displaypatient/displaypatient.component';

import { OutbillComponent } from './outbill/outbill.component';
import { InBillComponent } from './inbill/inbill.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    DepartmentComponent,
    DoctorComponent,
    RegisterComponent,
    ParentComponent,
    LabtestComponent,
    RoomComponent,
    RoomtypeComponent,
    InpatientComponent,
    OutpatientComponent,
    PatientlabtestdetailsComponent,
    CreatepatientComponent,
    DisplaypatientComponent,
    OutbillComponent,
    InBillComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,FormsModule,ReactiveFormsModule,routing
  ],
  providers: [{provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
