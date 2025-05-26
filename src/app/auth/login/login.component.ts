import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { JwtPayLoadFriendly, LoginRequest } from '../auth.types';
import { decodeToken } from '../token.utils';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
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
        const res = await this.authService.login(credentials);        
        const tokenFriendly: JwtPayLoadFriendly | null = decodeToken(res.token);
        const role = tokenFriendly?.role;

        console.log(`User role: ${role}`)
        if(role == 'Admin'){
          this.router.navigate(['/admin/']);
          console.log(`User logged in as Admin ...)`);
        } else if(role == "Doctor") {
          this.router.navigate(['/admin/']);
          console.log(`User logged in as Doctor ...)`);
        } else {
          // some other roles ...
          console.log(`User logged in as other role ...)`);
        }
        
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
