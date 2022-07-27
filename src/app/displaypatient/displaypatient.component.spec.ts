import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypatientComponent } from './displaypatient.component';

describe('DisplaypatientComponent', () => {
  let component: DisplaypatientComponent;
  let fixture: ComponentFixture<DisplaypatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaypatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaypatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
