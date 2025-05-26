import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterModel } from '../auth/register/register.model';
import { AppConstants } from '../constants';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  async registerDoctor(doctor: RegisterModel){
    let requestInit = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(doctor)
    };

    try{
      const response = await firstValueFrom(
        this.http.post(AppConstants.API_ENDPOINTS.ADMIN.REGISTER_DOCTOR, doctor)
      );
      console.log(response);

      // const res = await fetch(AppConstants.API_ENDPOINTS.ADMIN.REGISTER_DOCTOR, requestInit)

      // if(!res.ok){
      //   throw new Error('Registration failed.');
      // }
      console.log('Registration complete successfuly.', response);
      
    } catch(error: any){
      console.log('Registration error:', error);
    }    
  }
}
