import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  handleSubmit(form: any){
    console.log(form.value.username);
    if(form.valid){
      console.log('valid');
    } else {
      console.log('invalid');
    }
  }
}
