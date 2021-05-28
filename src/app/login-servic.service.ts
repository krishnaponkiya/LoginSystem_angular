import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServicService {

  constructor(public http : HttpClient) { }
  
  login(loginData: any) {
    return this.http.post<any>(environment.baseUrl + 'users/login', loginData);
  }
}
