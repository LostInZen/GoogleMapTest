import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Observable, of } from '../../../node_modules/rxjs';
import { Person } from '../person';
import { MessageService } from '../message-handler.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  person: Observable<Person>;
  topPersonID : number = 1;
  lat: number = 51.678418;
  lng: number = 7.809007;
  setPosition:any;
  constructor(private messageService: MessageService) { }

  ngOnInit() {


  }

}
