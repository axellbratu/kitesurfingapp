import { Component, OnInit,Input,AfterViewInit } from '@angular/core';
import {LeafletMap} from './leaflet-map';
import {spotsPayload} from '../services/payloads/spotspayloads';
import {SpotsService} from '../services/spots.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  //variable declarations for map and payload for API calls
  map:LeafletMap;
  //Ideally spots data would have been done in dashboardcontainer component in order to transfer data easier between map and spotstable components
  spots:spotsPayload[]=[];

  constructor(private service:SpotsService) {

   }

  ngOnInit(): void {
    
  }

  getSpots(){
    //api call for the spots
    this.service.getSpots().subscribe(res=>{
      for(let item of res as spotsPayload){
        this.spots.push(item);
        //function call to leaflet-map in order to add markers to the map
        this.map.setMark(item);
      }

    });
  }

  ngAfterViewInit():void{
    //Functions are called after view is initiallized to allow for map render
    this.map= new LeafletMap();
    this.getSpots();
  }

}
