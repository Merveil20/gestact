import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConAdminComponent } from './con-admin.component';

describe('ConAdminComponent', () => {
  let component: ConAdminComponent;
  let fixture: ComponentFixture<ConAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
