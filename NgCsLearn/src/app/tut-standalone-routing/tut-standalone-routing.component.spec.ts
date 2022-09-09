import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutStandaloneRoutingComponent } from './tut-standalone-routing.component';

describe('TutStandaloneRoutingComponent', () => {
  let component: TutStandaloneRoutingComponent;
  let fixture: ComponentFixture<TutStandaloneRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TutStandaloneRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutStandaloneRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
