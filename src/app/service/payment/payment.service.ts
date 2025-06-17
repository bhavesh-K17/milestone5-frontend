import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
private baseUrl="http://localhost:5020/booking"
  constructor(private http:HttpClient) { }

  addPayment(payment:Payment):Observable<Payment>{
    return this.http.post<Payment>(`${this.baseUrl}/payment`,payment);
  }
  getPayment(id:number):Observable<Payment>{
    return this.http.get<Payment>(`${this.baseUrl}/payment/${id}`)
  }
  getallpayment():Observable<Payment[]>{
    return this.http.get<Payment[]>(`${this.baseUrl}/payment/all`);
  }
}
