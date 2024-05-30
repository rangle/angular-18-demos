import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrComponent } from './ssr.component';

describe('SsrComponent', () => {
  let component: SsrComponent;
  let fixture: ComponentFixture<SsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
