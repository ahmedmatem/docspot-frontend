import { HttpInterceptorFn } from "@angular/common/http";
import { LOCAL_STORAGE_KEYS as ls_keys } from "../constants";
import { AuthUser } from "./auth.types";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authUser = localStorage.getItem(ls_keys.AUTH_USER);
    console.log(`AuthUser -> ${authUser}`);
    if(authUser){
      const user: AuthUser = JSON.parse(authUser);
      console.log('An interceptor was raised...');

      if(req){
        req = req.clone({
            setHeaders: {
                'Authorization': user.token ? `Bearer ${user.token}` : '',
            },
        });
      }    
    }  

    return next(req);
}