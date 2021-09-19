import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCmComponent } from './dynamic-cm.component';

describe('DynamicCmComponent', () => {
  let component: DynamicCmComponent;
  let fixture: ComponentFixture<DynamicCmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
