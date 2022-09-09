import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutStandaloneBootstrapComponent } from './tut-standalone-bootstrap.component';

describe('TutStandaloneBootstrapComponent', () => {
  let component: TutStandaloneBootstrapComponent;
  let fixture: ComponentFixture<TutStandaloneBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TutStandaloneBootstrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutStandaloneBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
