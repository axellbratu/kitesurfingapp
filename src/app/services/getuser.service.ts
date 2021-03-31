import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {loginIds,Userpayload} from '../services/payloads/userpayload';
import { throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetuserService {

  constructor(private HttpClient:HttpClient) {}
      getUserData(id:loginIds){
          //checks if user exists in the database
          return this.HttpClient.get<Userpayload>(`https://60548360d4d9dc001726d591.mockapi.io/user/${id.userId}`).pipe(catchError(this.handleError));
        }
        handleError(){
          return throwError(false);
        };

    
}


