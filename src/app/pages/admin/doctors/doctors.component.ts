import { Component } from '@angular/core';
import { DoctorCardComponent } from './doctor-card/doctor-card.component';
import { DoctorModalComponent } from "./share/doctor-modal/doctor-modal.component";
import { RegisterModel } from '../../../auth/register/register.model';
import { DoctorService } from '../../../services/doctor.service';

declare var bootstrap: any;

@Component({
  selector: 'app-doctors',
  imports: [DoctorCardComponent, DoctorModalComponent],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {
  constructor(private doctorService: DoctorService){}

  add(){
    const modalEl = document.getElementById('doctor-modal');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }

  async save(doctor: RegisterModel){
    await this.doctorService.registerDoctor(doctor);
  }
}
