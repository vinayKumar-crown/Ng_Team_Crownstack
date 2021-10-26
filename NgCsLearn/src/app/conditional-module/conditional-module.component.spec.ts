import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalModuleComponent } from './conditional-module.component';

describe('ConditionalModuleComponent', () => {
  let component: ConditionalModuleComponent;
  let fixture: ComponentFixture<ConditionalModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
