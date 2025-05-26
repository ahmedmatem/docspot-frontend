import { Component, signal } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AppConstants } from '../../../constants';
import { AuthUser } from '../../../auth/auth.types';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  roles = AppConstants.ROLES;
  user = signal<AuthUser|null>(null);

  constructor(private authService: AuthService){
    this.user = this.authService.user;
  }


}
