import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/models';
import { BookingService } from '../../service/booking/booking.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../../service/payment/payment.service';

@Component({
  selector: 'app-view-booking',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view-booking.component.html',
  styleUrl: './view-booking.component.css'
})
export class ViewBookingComponent implements OnInit{

  bookingId=0;
  booking?:Booking;
  bookingDetails:any;
  bookings:any[]=[];

  constructor(private bookingService:BookingService,private paymentService:PaymentService){}

ngOnInit(): void {
  // this.bookingService.viewBookings().subscribe({
  //   next:data=>this.bookings=data,
  //   error:err=> console.error("error in fetching booking")
  // });
  
 
this.bookingService.viewBookings().subscribe({
 next: data => {
  this.bookings = data;
 console.log("Bookings fetched:");
this.bookings.forEach((booking, index) => {
  this.paymentService.getPayment(booking.paymentId).subscribe((pay)=>{
    booking.payment = pay;
  });
 console.log(`Booking ${index + 1}:`, booking);
 console.log(booking.payment)
 });
 },
 error: err => console.error("Error in fetching bookings", err)
});

}

viewBookingById(){
  this.bookingService.viewBookingById(this.bookingId).subscribe((data)=>{
    this.booking = data;
  });
}
getFullDetails(){
  this.bookingService.viewBookingDetails(this.bookingId).subscribe((data)=>{
    this.bookingDetails = data;
  });
}
}
