import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutbillComponent } from './outbill.component';

describe('OutbillComponent', () => {
  let component: OutbillComponent;
  let fixture: ComponentFixture<OutbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
