import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdecesComponent } from './formdeces.component';

describe('FormdecesComponent', () => {
  let component: FormdecesComponent;
  let fixture: ComponentFixture<FormdecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormdecesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
