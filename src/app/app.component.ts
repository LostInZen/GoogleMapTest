import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Missing-App';
    today = new Date("12/24/2018");
    
    lat: number = 51.678418;
    lng: number = 7.809007;
}
