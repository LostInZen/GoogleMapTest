import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message-handler.service';
import { MissingPeopleService } from '../missing-people.service';
import {Person } from '../person';
import { Observable } from '../../../node_modules/rxjs';
@Component({
  selector: 'app-map-pointer',
  templateUrl: './map-pointer.component.html',
  styleUrls: ['./map-pointer.component.css']
})
export class MapPointerComponent implements OnInit{
  @Input() Person:Person
  @Input() City:string;
  @Input() State:string;
  title: string = 'Geo-Location';
  lat: number = 51.678418;
  lng: number = 7.809007;
  geoCodeResponse: Promise<any>;
  constructor(private messageService: MessageService, private missingPeopleService: MissingPeopleService) { }

  ngOnInit() {
    this.geoCodeResponse = this.getCoordinates(this.City,this.State);
    console.log("geo response" + JSON.stringify(this.geoCodeResponse));
  }
  getCoordinates(city:string, state:string):Promise<any> {
    return this.missingPeopleService.getCoordinates(city,state);

  }
}
