import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensaryLayoutComponent } from './dispensary-layout.component';

describe('DispensaryLayoutComponent', () => {
  let component: DispensaryLayoutComponent;
  let fixture: ComponentFixture<DispensaryLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispensaryLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispensaryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
