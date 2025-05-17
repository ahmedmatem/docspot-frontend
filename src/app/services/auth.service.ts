import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { API_AUTH, LOCAL_STORAGE_KEYS as ls_keys } from '../constants';
import { AuthUser, JwtPayLoadFriendly, LoginRequest } from '../auth/auth.types';
import { decodeToken, getDecodedToken } from '../auth/token.utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = signal(false);
  user = signal<AuthUser | null>(null);

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
      const res = await fetch(API_AUTH.LOGIN, requestInit);

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
        localStorage.setItem(ls_keys.AUTH_USER, JSON.stringify(user))

        this.isLoggedIn.set(true);
        this.user.set(user);
      };

      return token;
    } catch(error: any){
      console.log('Login error:', error);
      throw error;
    }
  }

  checkUserInLocalStorage(){
    const authUser = localStorage.getItem(ls_keys.AUTH_USER);

    if(authUser){
      this.isLoggedIn.set(true);
      const user = JSON.parse(authUser);
      this.user.set(user);
      // return user;
    }

    // return null;
  }

  logout() {
    localStorage.removeItem(ls_keys.AUTH_USER);
    this.isLoggedIn.set(false);
    this.user.set(null);
  }
}
