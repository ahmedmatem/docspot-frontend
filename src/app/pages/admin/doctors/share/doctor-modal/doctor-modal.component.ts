import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterModel } from '../../../../../auth/register/register.model';

@Component({
  selector: 'app-doctor-modal',
  imports: [FormsModule],
  templateUrl: './doctor-modal.component.html',
  styleUrl: './doctor-modal.component.css'
})
export class DoctorModalComponent {
  @Input() title: string = 'Default title';
  @Output() saveClicked = new EventEmitter<RegisterModel>();

  model: RegisterModel = {
    name: '',
    email: '',
    password: '',
    phoneNumber: ''
  };

  save(){
    this.model.name = this.model.name.trim();
    this.model.email = this.model.email.trim();
    this.model.password = this.model.password.trim();
    if(this.model.name && this.model.email && this.model.password){
      this.saveClicked.emit(this.model);
      // reset model
      this.model = {
        name: '',
        email: '',
        password: '',
        phoneNumber: ''
      };
    }
  }

}
