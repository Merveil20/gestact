import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNaiss2Component } from './form-naiss2.component';

describe('FormNaiss2Component', () => {
  let component: FormNaiss2Component;
  let fixture: ComponentFixture<FormNaiss2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNaiss2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNaiss2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
