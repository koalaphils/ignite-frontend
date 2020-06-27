import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContextMenuComponent } from './user-context-menu.component';

describe('UserContextMenuComponent', () => {
  let component: UserContextMenuComponent;
  let fixture: ComponentFixture<UserContextMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContextMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
