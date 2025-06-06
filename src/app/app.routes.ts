import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { DoctorsComponent } from './pages/admin/doctors/doctors.component';
import { AppointmentsComponent } from './pages/admin/appointments/appointments.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'DocSpot - Начало'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'DocSpot - Вход'
    },
    {
        path: 'register',
        title: 'DocSpot - Регистрация',
        component: RegisterComponent
    },
    {
        path: 'admin',
        children: [
            { path: '', component: DashboardComponent },
            { path: 'appointments', component: AppointmentsComponent },
            { path: 'doctors', component: DoctorsComponent }
        ]
    }
];
