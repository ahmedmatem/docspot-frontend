import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeComponent as DoctorHome} from './pages/doctor/home/home.component'
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { DoctorsComponent } from './pages/admin/doctors/doctors.component';
import { AppointmentsComponent } from './pages/admin/appointments/appointments.component';
import { RoleGuard } from './guards/role.guard';
import { AppConstants } from './constants';
import { AccessDeniedComponent } from './pages/shared/access-denied/access-denied.component';
import { ScheduleComponent } from './pages/doctor/schedule/schedule.component';

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
        title: 'Admin Panel',
        canActivateChild: [RoleGuard],
        data: {roles: [AppConstants.ROLES.ADMIN]},
        children: [
            { path: '', component: DashboardComponent },
            { path: 'appointments', component: AppointmentsComponent },
            { path: 'doctors', component: DoctorsComponent }
        ]
    },
    {
        path: 'doctor',
        canActivateChild: [RoleGuard],
        data: {roles: [AppConstants.ROLES.DOCTOR]},
        children: [
            {path: '', component: DoctorHome },
            {path: 'schedule', component: ScheduleComponent}
        ]
    },
    {
        path: 'access-denied',
        component: AccessDeniedComponent,
    }
];
