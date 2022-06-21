import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNaissComponent } from './form-naiss.component';

describe('FormNaissComponent', () => {
  let component: FormNaissComponent;
  let fixture: ComponentFixture<FormNaissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNaissComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNaissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
