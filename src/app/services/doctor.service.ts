import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterModel } from '../auth/register/register.model';
import { API_ADMIN } from '../constants';

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
      const res = await fetch(API_ADMIN.REGISTER_DOCTOR, requestInit)

      if(!res.ok){
        throw new Error('Registration failed.');
      }
      console.log('Registration complete successfuly.');
      
    } catch(error: any){
      console.log('Registration error:', error);
    }    
  }
}
