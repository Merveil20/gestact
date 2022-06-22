import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdefuntComponent } from './formdefunt.component';

describe('FormdefuntComponent', () => {
  let component: FormdefuntComponent;
  let fixture: ComponentFixture<FormdefuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormdefuntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdefuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
