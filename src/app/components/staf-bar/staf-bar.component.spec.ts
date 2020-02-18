import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StafBarComponent } from './staf-bar.component';

describe('StafBarComponent', () => {
  let component: StafBarComponent;
  let fixture: ComponentFixture<StafBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StafBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StafBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
