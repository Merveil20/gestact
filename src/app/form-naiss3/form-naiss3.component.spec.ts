import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNaiss3Component } from './form-naiss3.component';

describe('FormNaiss3Component', () => {
  let component: FormNaiss3Component;
  let fixture: ComponentFixture<FormNaiss3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNaiss3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNaiss3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
