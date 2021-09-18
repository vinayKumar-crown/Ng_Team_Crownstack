import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsLocaleComponent } from './cs-locale.component';

describe('CsLocaleComponent', () => {
  let component: CsLocaleComponent;
  let fixture: ComponentFixture<CsLocaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsLocaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsLocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
