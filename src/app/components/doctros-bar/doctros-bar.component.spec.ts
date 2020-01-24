import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctrosBarComponent } from './doctros-bar.component';

describe('DoctrosBarComponent', () => {
  let component: DoctrosBarComponent;
  let fixture: ComponentFixture<DoctrosBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctrosBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctrosBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
