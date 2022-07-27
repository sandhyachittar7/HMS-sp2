import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientlabtestdetailsComponent } from './patientlabtestdetails.component';

describe('PatientlabtestdetailsComponent', () => {
  let component: PatientlabtestdetailsComponent;
  let fixture: ComponentFixture<PatientlabtestdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientlabtestdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientlabtestdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
