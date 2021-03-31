import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddspotComponent } from '../addspot/addspot.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog:MatDialog,private router:Router) { }

  openDialog(){
    this.dialog.open(AddspotComponent,{
      height: '400px',
      width: '600px',
    });
  }

  ngOnInit(): void {
  }
  logout(){
    sessionStorage.removeItem('loginAvatar');
    this.router.navigateByUrl('/');
  }
}
