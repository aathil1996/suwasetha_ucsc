import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientdetailsListComponent } from './patientdetails-list.component';

describe('PatientdetailsListComponent', () => {
  let component: PatientdetailsListComponent;
  let fixture: ComponentFixture<PatientdetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientdetailsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientdetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
