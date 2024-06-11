import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSignalComponent } from './users-signal.component';

describe('UsersSignalComponent', () => {
  let component: UsersSignalComponent;
  let fixture: ComponentFixture<UsersSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersSignalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
