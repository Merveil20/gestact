import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnfantComponent } from './form-enfant.component';

describe('FormEnfantComponent', () => {
  let component: FormEnfantComponent;
  let fixture: ComponentFixture<FormEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEnfantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
