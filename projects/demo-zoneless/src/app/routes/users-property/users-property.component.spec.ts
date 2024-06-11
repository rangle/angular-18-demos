import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPropertyComponent } from './users-property.component';

describe('UsersPropertyComponent', () => {
  let component: UsersPropertyComponent;
  let fixture: ComponentFixture<UsersPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersPropertyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
