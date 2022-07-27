import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InBillComponent } from './inbill.component';

describe('InbillComponent', () => {
  let component: InBillComponent;
  let fixture: ComponentFixture<InBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
