import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../constants';
import { AuthUser, JwtPayLoadFriendly, LoginRequest } from '../auth/auth.types';
import { decodeToken, getDecodedToken } from '../auth/token.utils';

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
      const res = await fetch(API_ENDPOINTS.LOGIN, requestInit);

      if(!res.ok){
        throw new Error('Login failed');
      }

      const token = await res.json();

      const tokenFriendly: JwtPayLoadFriendly | null = decodeToken(token.token);
      if(tokenFriendly){
        const user: AuthUser = {
          token: token.token,
          role: tokenFriendly!.role,
          name: tokenFriendly!.name
        };
        // save authenticated user in localstorage
        localStorage.setItem('authUser', JSON.stringify(user))
      };

      return token;
    } catch(error: any){
      console.log('Login error:', error);
      throw error;
    }
  }
}
