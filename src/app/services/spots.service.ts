import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {spotsPayload} from '../services/payloads/spotspayloads';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpotsService {

  constructor(private HttpClient:HttpClient) { }

  getSpots(){
    //get request for the surfing spots
    return this.HttpClient.get<spotsPayload>(`https://60548360d4d9dc001726d591.mockapi.io/spot`);
  }
}
