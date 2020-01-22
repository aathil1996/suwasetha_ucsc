import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensarySidebarComponent } from './dispensary-sidebar.component';

describe('DispensarySidebarComponent', () => {
  let component: DispensarySidebarComponent;
  let fixture: ComponentFixture<DispensarySidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispensarySidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispensarySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
