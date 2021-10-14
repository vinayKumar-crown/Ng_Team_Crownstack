import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListOldComponent } from './user-list-old.component';

describe('UserListOldComponent', () => {
  let component: UserListOldComponent;
  let fixture: ComponentFixture<UserListOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListOldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
