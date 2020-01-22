import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensaryFooterComponent } from './dispensary-footer.component';

describe('DispensaryFooterComponent', () => {
  let component: DispensaryFooterComponent;
  let fixture: ComponentFixture<DispensaryFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispensaryFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispensaryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
