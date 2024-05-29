import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSignalsComponent } from './demo-signals.component';

describe('DemoSignalsComponent', () => {
  let component: DemoSignalsComponent;
  let fixture: ComponentFixture<DemoSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoSignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
