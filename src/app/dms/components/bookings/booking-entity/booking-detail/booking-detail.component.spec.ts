
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetailComponent } from './booking-detail.component';

describe('BookingFormComponent', () => {

  let component: BookingDetailComponent;
  let fixture: ComponentFixture<BookingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
