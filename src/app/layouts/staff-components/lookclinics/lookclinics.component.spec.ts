import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookClinicsComponent } from './lookclinics.component';

describe('LookClinicsComponent', () => {
  let component: LookClinicsComponent;
  let fixture: ComponentFixture<LookClinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookClinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
