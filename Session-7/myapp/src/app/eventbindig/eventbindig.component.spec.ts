import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbindigComponent } from './eventbindig.component';

describe('EventbindigComponent', () => {
  let component: EventbindigComponent;
  let fixture: ComponentFixture<EventbindigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventbindigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventbindigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
