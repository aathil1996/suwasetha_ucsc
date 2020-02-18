import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HosadminSidebarComponent } from './hosadmin-sidebar.component';

describe('HosadminSidebarComponent', () => {
  let component: HosadminSidebarComponent;
  let fixture: ComponentFixture<HosadminSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HosadminSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HosadminSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
