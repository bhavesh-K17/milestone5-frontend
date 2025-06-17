import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookingComponent } from './view-booking.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { PaymentMethod, PaymentStatus, Status } from '../../models/models';

describe('ViewBookingComponent', () => {
  let component: ViewBookingComponent;
  let fixture: ComponentFixture<ViewBookingComponent>;
  const booking = {
    id: 1,
    customerId: 101,
    flightId: 202,
    bookingDate: '2025-06-07',
    seatNumber: '12A',
    status: 'Confirmed',
    payment: {
      id: 501,
      bookingId: 1,
      amount: 1500,
      paymentDate: '2025-06-06',
      paymentMethod: 'Credit Card',
      paymentStatus: 'Paid'
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewBookingComponent,FormsModule,CommonModule,HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading "Add Booking"',()=>{
      const heading = fixture.nativeElement.querySelector('h3');
      expect(heading.textContent).toContain('view Booking');
    });
  
  
    it('should render view booking div after clicking viewBookingById()', () => {
  spyOn(component, 'viewBookingById').and.callFake(() => {
    component.booking = {
      id: 1,
      customerId: 101,
      flightId: 202,
      bookingDate: new Date('2025-06-07'),
      seatNumber: '12A',
      status: Status.Booked,
      payment: {
        id: 501,
        bookingId: 1,
        amount: 1500,
        paymentDate: new Date('2025-06-06'),
        paymentMethod: PaymentMethod.CreditCard,
        paymentStatus: PaymentStatus.Failed
      }
    };
  });

  fixture.detectChanges();

  const button = fixture.debugElement.query(By.css('button'));
  button.triggerEventHandler('click', null);
  fixture.detectChanges(); 

  const div = fixture.debugElement.query(By.css('.viewBooking'));
  expect(component.viewBookingById).toHaveBeenCalled();
  expect(div).toBeTruthy(); 
});

});
