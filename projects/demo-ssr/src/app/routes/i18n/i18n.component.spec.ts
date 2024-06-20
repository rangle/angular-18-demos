import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nComponent } from './i18n.component';

describe('SsrComponent', () => {
  let component: I18nComponent;
  let fixture: ComponentFixture<I18nComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [I18nComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(I18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
