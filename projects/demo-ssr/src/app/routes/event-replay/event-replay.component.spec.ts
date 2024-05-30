import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventReplayComponent } from './event-replay.component';

describe('SsrComponent', () => {
  let component: EventReplayComponent;
  let fixture: ComponentFixture<EventReplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventReplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
