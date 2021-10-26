import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutRouteComponent } from './without-route.component';

describe('WithoutRouteComponent', () => {
  let component: WithoutRouteComponent;
  let fixture: ComponentFixture<WithoutRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
