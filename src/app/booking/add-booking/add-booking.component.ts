import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Booking, Payment, PaymentMethod, PaymentStatus } from '../../models/models';
import { BookingService } from '../../service/booking/booking.service';
import { PaymentService } from '../../service/payment/payment.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-booking',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-booking.component.html',
  styleUrl: './add-booking.component.css'
})
export class AddBookingComponent implements OnInit {

payment!:Payment;
paymentList:Payment[]=[];
paymentIds:string[]=[];
booking:Booking={
    customerId: 0,
    flightId: 0,
    bookingDate: new Date(),
    seatNumber: '',
    status: undefined, // or BookingStatus.Booked if you want a default
    payment: {
      bookingId: 0,
      amount: 0,
      paymentDate:new Date(),
      paymentMethod: PaymentMethod.CreditCard, // or default value like PaymentMethod.Card
      paymentStatus: PaymentStatus.Failed  // or PaymentStatus.Pending
  }
};
constructor(private bookingService:BookingService,private paymentService:PaymentService, private router:Router){}

ngOnInit(): void {
  this.loadPaymentIds();
}

loadPaymentIds(){
  this.paymentService.getallpayment().subscribe(
    (data)=>{
      this.paymentList=data;
    }
  );
}

fetchedPayment(id:number):any{
  this.paymentService.getPayment(id).subscribe((data)=>{
    this.booking.payment=data;
    return data;
  });
}

onSubmit(){
  //this.booking.paymentId=this.payment.id;
  this.bookingService.addBooking(this.booking).subscribe((data)=>{
    console.log(this.booking);
    alert("booking Created sucessfully");
    this.router.navigate(['/view-booking']);  
    this.resetForm();
  })
}

resetForm(){
  this.booking = {
    customerId: 0,
    flightId: 0,
    bookingDate: new Date(),
    seatNumber: '',
    status: undefined, // or BookingStatus.Booked if you want a default
    payment: {
      bookingId: 0,
      amount: 0,
      paymentDate:new Date(),
      paymentMethod: PaymentMethod.CreditCard, // or default value like PaymentMethod.Card
      paymentStatus: PaymentStatus.Failed  // or PaymentStatus.Pending
    }
  };
}

}
