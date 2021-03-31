import * as leaflet from 'leaflet';
import {spotsPayload} from '../services/payloads/spotspayloads';
export class LeafletMap{

    //initial declaration of the leaflet
    harta:leaflet.Map;

    bucharest={
        //setting default coordinates for map to focus on
        coords: leaflet.latLng(44.439663,26.096306),
        zoom:2
    }
    greenIcon = leaflet.icon({
        iconUrl: '../assets/marker-icon.png',
    
        iconSize:     [25, 41], // size of the icon

        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location

        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    favoriteIcon = leaflet.icon({
        iconUrl: '../assets/marker-icon-fav.png',
    
        iconSize:     [25, 41], // size of the icon

        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location

        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    setMark(spot:spotsPayload){
        //markers should have been done with a different angular component in order to allow icon changes and proper mat-card implementation
        leaflet.marker([spot.lat,spot.long],{icon:this.greenIcon}).addTo(this.harta).bindPopup(`
        <mat-card>
        <mat-card-title>${spot.name}
        </mat-card-title>
        <mat-card-content>
        <div>
        ${spot.country}
        </div>
        <p>Wind Probability: ${spot.probability}%</p>
        <p>Latitude:${spot.lat}</p>
        <p>Longitude:${spot.long}</p>
        <p>When to go:${spot.month}</p>
        </mat-card-content>
        <mat-card-actions>
        <button mat-button class="popupButton">Add to favourites</button>
        </mat-card-actions>
        </mat-card>
        `);

    }


    constructor(){
        //initiate map
        this.harta=leaflet.map("map");
        //select tiling for the map
        leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.harta);
        //sets view in order to make map visible
        this.harta.setView(this.bucharest.coords,this.bucharest.zoom);
    }
    
    
}