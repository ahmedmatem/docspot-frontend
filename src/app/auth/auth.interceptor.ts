import { HttpInterceptorFn } from "@angular/common/http";

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
    const token = localStorage.getItem('token');

    console.log('An interceptor was raised...');

    if(req){
        req = req.clone({
            setHeaders: {
                'Authorization': token ? `Bearer ${token}` : '',
            },
        });
    }    

    return next(req);
}