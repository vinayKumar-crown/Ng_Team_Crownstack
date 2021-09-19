import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCmUserComponent } from './dynamic-cm-user.component';

describe('DynamicCmUserComponent', () => {
  let component: DynamicCmUserComponent;
  let fixture: ComponentFixture<DynamicCmUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCmUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCmUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
