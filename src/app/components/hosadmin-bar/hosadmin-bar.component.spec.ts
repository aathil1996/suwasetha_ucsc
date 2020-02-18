import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HosadminBarComponent } from './hosadmin-bar.component';

describe('HosadminBarComponent', () => {
  let component: HosadminBarComponent;
  let fixture: ComponentFixture<HosadminBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HosadminBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HosadminBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
