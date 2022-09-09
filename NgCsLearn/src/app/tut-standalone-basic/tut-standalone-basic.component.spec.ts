import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutStandaloneBasicComponent } from './tut-standalone-basic.component';

describe('TutStandaloneBasicComponent', () => {
  let component: TutStandaloneBasicComponent;
  let fixture: ComponentFixture<TutStandaloneBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TutStandaloneBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutStandaloneBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
