import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefferredLoadingComponent } from './defferred-loading.component';

describe('DefferredLoadingComponent', () => {
  let component: DefferredLoadingComponent;
  let fixture: ComponentFixture<DefferredLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefferredLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefferredLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
