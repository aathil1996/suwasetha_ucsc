import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PateintBarComponent } from './pateint-bar.component';

describe('PateintBarComponent', () => {
  let component: PateintBarComponent;
  let fixture: ComponentFixture<PateintBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PateintBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PateintBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
