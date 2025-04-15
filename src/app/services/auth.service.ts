import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../constants';
import { LoginRequest } from '../../types/auth.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param credentials - The usename and password to authenticate
   * @returns A promise that resolves with the login response
   * @throws Will throw an error if the login request fails
   */
  async login(credentials: LoginRequest): Promise<{token: string}> {
    let requestInit = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(credentials)
    };

    try {
      const response = await fetch(API_ENDPOINTS.LOGIN, requestInit);

      if(!response.ok){
        throw new Error('Login failed');
      }

      let token = await response.json()

      localStorage.setItem('token', token);

      return token;
    } catch(error: any){
      console.log('Login error:', error);
      throw error;
    }
  }
}
