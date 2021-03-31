import { Component, OnInit, ViewChild } from '@angular/core';
import {spotsPayload} from '../services/payloads/spotspayloads';
import {SpotsService} from '../services/spots.service';
import { MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-spotstable',
  templateUrl: './spotstable.component.html',
  styleUrls: ['./spotstable.component.css']
})

export class SpotstableComponent implements OnInit {
  spotsData:spotsPayload[]=[];
  constructor(private service:SpotsService) { }

  ngOnInit(): void {
    this.getSpots();
    console.log(this.spotsData);
  }
  getSpots(){
    this.service.getSpots().subscribe(res=>{
      for(let item of res as spotsPayload){
        this.spotsData.push(item);
      }
    })
  }
}
