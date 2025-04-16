import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../../types/auth.types';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginError: string | null = null;

  constructor(private router: Router, private authService: AuthService){}

  async handleLogin(form: any){
    if(form.valid){
      const credentials: LoginRequest = {
        email: form.value.username,
        password: form.value.password
      };
      
      try{
        const userData = await this.authService.login(credentials);
        console.log('Token:', userData.token);
        this.router.navigate(['/admin/']);
      } catch(err: any){
        this.loginError = 'Невалиден имейл или парола.';
        console.error(err.message); // 'Login failed:'
      }
    } else {
      console.log('Invalid form data');
    }
  }
}
