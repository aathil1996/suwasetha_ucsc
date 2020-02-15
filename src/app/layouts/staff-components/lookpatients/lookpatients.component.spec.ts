import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookPatientsComponent } from './lookpatients.component';

describe('LookPatientsComponent', () => {
  let component: LookPatientsComponent;
  let fixture: ComponentFixture<LookPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
