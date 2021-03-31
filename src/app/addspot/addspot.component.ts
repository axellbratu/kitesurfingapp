import { Component, OnInit, AfterViewInit } from '@angular/core';
import {LeafletMap} from '../map/leaflet-map';
@Component({
  selector: 'app-addspot',
  templateUrl: './addspot.component.html',
  styleUrls: ['./addspot.component.css']
})
export class AddspotComponent implements OnInit {
  minimap:LeafletMap;
  constructor() { }

  addSpot(){
    //here would go a service with a POST call to the API /spot but I ran out of time
  }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{
    this.minimap= new LeafletMap;
  }
}
