import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthUser } from '../auth/auth.types';
import { AppConstants } from '../constants';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink,NgTemplateOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  roles = AppConstants.ROLES;
  isLoggedIn = signal(false);
  user = signal<AuthUser | null>(null);

  constructor(private authService: AuthService){
    // const user = authService.checkUserInLocalStorage();
    
    this.user = this.authService.user;
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  logout(){
    this.authService.logout();
  }

}
