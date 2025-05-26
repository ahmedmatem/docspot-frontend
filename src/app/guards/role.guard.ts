import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({providedIn: 'root'})
export class RoleGuard implements CanActivate {
    private authService = inject(AuthService);
    private router = inject(Router);
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        const allowedRoles = route.data['roles'] as string[];
        const user = this.authService.user;

        if(user() && allowedRoles.includes(user()?.role!)){
            return true;
        }

        // Redirect unauthorized user
        return this.router.parseUrl('/login'); // or access-denied page
    }
}