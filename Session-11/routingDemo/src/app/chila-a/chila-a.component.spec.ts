import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilaAComponent } from './chila-a.component';

describe('ChilaAComponent', () => {
  let component: ChilaAComponent;
  let fixture: ComponentFixture<ChilaAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChilaAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
