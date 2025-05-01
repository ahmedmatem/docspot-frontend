import { Component } from '@angular/core';
import { DoctorCardComponent } from './doctor-card/doctor-card.component';

@Component({
  selector: 'app-doctors',
  imports: [DoctorCardComponent],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {

}
