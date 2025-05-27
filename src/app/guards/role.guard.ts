import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({providedIn: 'root'})
export class RoleGuard implements CanActivate, CanActivateChild{
    private authService = inject(AuthService);
    private router = inject(Router);
    
    private checkAccess(route: ActivatedRouteSnapshot): GuardResult {
        const allowedRoles = route.data['roles'] as string[];
        const user = this.authService.user();

        if(user && allowedRoles?.includes(user?.role)){
            return true;
        }

        // Redirect unauthorized user
        return this.router.parseUrl('/access-denied'); // or login page
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.checkAccess(route);
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        return this.checkAccess(childRoute);
    }
}