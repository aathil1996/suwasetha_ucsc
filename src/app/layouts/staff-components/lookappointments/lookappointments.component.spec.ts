import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookAppointmentsComponent } from './lookappointments.component';

describe('LookAppointmentsComponent', () => {
  let component: LookAppointmentsComponent;
  let fixture: ComponentFixture<LookAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
