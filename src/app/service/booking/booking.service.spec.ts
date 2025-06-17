import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BookingService } from './booking.service';
import { Booking, PaymentMethod, PaymentStatus, Status } from '../../models/models';

describe('BookingService', () => {
  let service: BookingService;
  let httpMock: HttpTestingController;

  const dummyBooking:Booking={
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[BookingService]
    });
    service = TestBed.inject(BookingService);
    httpMock=TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should view Booking via post',()=>{
    service.addBooking(dummyBooking).subscribe((data)=>{
      expect(data).toEqual(dummyBooking);
    });
   const req = httpMock.expectOne('http://localhost:5020/booking/booking');
   expect(req.request.method).toBe('POST');
   req.flush(dummyBooking);
  })
it('should view a booking via GET', () => {
    const bookingId = 1;

    service.viewBookingById(bookingId).subscribe((res) => {
      expect(res).toEqual(dummyBooking);
    });

    const req = httpMock.expectOne(`http://localhost:5020/booking/booking/${bookingId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyBooking);
  });

  xit('should get full booking details via GET',()=>{
    const fullDetails={booking:dummyBooking,payment:dummyBooking.payment.id};
    const bookingId = 1;
    service.viewBookingDetails(bookingId).subscribe((data)=>{
  
    })
  });
});
