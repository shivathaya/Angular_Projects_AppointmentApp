import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit{


  newAppointmentTitle: String ="";
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];

  ngOnInit(): void {
    let localSavedVal = localStorage.getItem("appointments");
    this.appointments = localSavedVal ? JSON.parse(localSavedVal):[];
    
  }

  addNewAppointment() {  
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      };
      this.appointments.push(newAppointment);
      localStorage.setItem("appointments", JSON.stringify(this.appointments));
      alert(this.appointments.length);
    }
    else{
      alert("Please Enter all the values")
    }
    this.newAppointmentTitle = "";
    this.newAppointmentDate = new Date();
  }

  deleteAppointment(index: number){
    this.appointments.splice(index,1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }

}
