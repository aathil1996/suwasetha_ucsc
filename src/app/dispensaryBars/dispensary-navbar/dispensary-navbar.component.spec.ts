import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensaryNavbarComponent } from './dispensary-navbar.component';

describe('DispensaryNavbarComponent', () => {
  let component: DispensaryNavbarComponent;
  let fixture: ComponentFixture<DispensaryNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispensaryNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispensaryNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
