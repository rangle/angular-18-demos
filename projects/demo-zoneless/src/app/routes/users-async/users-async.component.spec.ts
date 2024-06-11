import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAsyncComponent } from './users-async.component';

describe('UsersAsyncComponent', () => {
  let component: UsersAsyncComponent;
  let fixture: ComponentFixture<UsersAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersAsyncComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
