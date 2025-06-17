import { Routes } from '@angular/router';
import { AddBookingComponent } from './booking/add-booking/add-booking.component';
import { ViewBookingComponent } from './booking/view-booking/view-booking.component';

export const routes: Routes = [
    {path:'',component:AddBookingComponent},
    {path:'view-booking',component:ViewBookingComponent}
];
