import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookappointmentListComponent } from './bookappointment-list.component';

describe('BookappointmentListComponent', () => {
  let component: BookappointmentListComponent;
  let fixture: ComponentFixture<BookappointmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookappointmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookappointmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
