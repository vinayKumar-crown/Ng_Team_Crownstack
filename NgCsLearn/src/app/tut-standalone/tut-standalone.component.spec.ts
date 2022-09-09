import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutStandaloneComponent } from './tut-standalone.component';

describe('TutStandaloneComponent', () => {
  let component: TutStandaloneComponent;
  let fixture: ComponentFixture<TutStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TutStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
