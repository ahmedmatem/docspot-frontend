import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthUser } from '../auth/auth.types';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn = signal(false);
  username = signal<AuthUser | null>(null);

  constructor(private authService: AuthService){
    const user = authService.checkUserInLocalStorage();
    
    this.username = this.authService.user;
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  logout(){
    this.authService.logout();
  }

}
