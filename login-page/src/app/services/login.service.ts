import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';
import { apiUrl } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private httpClient: HttpClient) { }
  
  login(email:string, password: string) {
    const url = apiUrl + "/login"
    return this.httpClient.post<LoginResponse>(url, {email, password}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)

      })
    )
  }

  signup(name:string, email:string, password: string) {
    const url = apiUrl + "/register"
    return this.httpClient.post<LoginResponse>(url, {name, email, password}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)

      })
    )
  }

}
