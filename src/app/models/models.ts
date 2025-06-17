export enum Status
{
    Booked='BOOKED',
    Cancelled='CANCELLED',
    CheckedIn='CHECKEDIN'
}
export enum PaymentMethod
{
    CreditCard='CREDITCARD',
    DebitCard='DEBITCARD',
    Paypal='PAYPAL'}

	export enum PaymentStatus
    {
        Success='SUCCESS',
        Failed='FAILED',
        Pending='PENDING'}
	

export interface Booking{
    id?:number;
	customerId:number;
	flightId:number;
	bookingDate:Date;
	seatNumber:string;
	status?:Status;
	payment:Payment;
    paymentId?:number;
}

export interface Payment{
     id?:number;	 
	bookingId:number;
	amount:number;
	paymentDate:Date;
    paymentMethod:PaymentMethod;
	paymentStatus:PaymentStatus;
}