import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookingComponent } from './add-booking.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('AddBookingComponent', () => {
  let component: AddBookingComponent;
  let fixture: ComponentFixture<AddBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBookingComponent,FormsModule,CommonModule,HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the coponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading "Add Booking"',()=>{
    const heading = fixture.nativeElement.querySelector('h3');
    expect(heading.textContent).toContain('Add Booking');
  });

  it('Should bind flightId input to booking.flightId',()=>{
    const input = fixture.nativeElement.querySelector('input[name=flightId]');
    input.value = '1';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.booking.flightId).toBe(1);
  });

  it('should call onsubmit() when form is submitted',()=>{
    spyOn(component,'onSubmit');
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit',null);
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
