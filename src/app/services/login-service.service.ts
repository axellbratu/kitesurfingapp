import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private HttpClient:HttpClient) { }
  doLogin(form:FormGroup):Observable<any>{
    //post request for the login
    return this.HttpClient.post(`https://60548360d4d9dc001726d591.mockapi.io/login?username=${form[0]}&password=${form[1]}`,null);
  }
}
