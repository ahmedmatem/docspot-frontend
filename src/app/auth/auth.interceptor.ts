import { HttpInterceptorFn } from "@angular/common/http";
import { AppConstants } from "../constants";
import { AuthUser } from "./auth.types";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Auth interceptor is executong');
    const authUser = localStorage.getItem(AppConstants.LOCAL_STORAGE_KEYS.AUTH_USER);
    console.log(`AuthUser -> ${authUser}`);
    if(authUser){
      const user: AuthUser = JSON.parse(authUser);
      console.log('An interceptor was raised...');

      if(req){
        req = req.clone({
            setHeaders: {
                Authorization: user.token ? `Bearer ${user.token}` : '',
            },
        });
      }    
    }  

    return next(req);
}