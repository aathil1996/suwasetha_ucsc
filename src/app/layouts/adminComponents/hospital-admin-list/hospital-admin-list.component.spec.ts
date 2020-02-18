import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalAdminListComponent } from './hospital-admin-list.component';

describe('HospitalAdminListComponent', () => {
  let component: HospitalAdminListComponent;
  let fixture: ComponentFixture<HospitalAdminListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalAdminListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
