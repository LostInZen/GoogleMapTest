import { Component, OnInit, Input } from '@angular/core';
import { MissingPeopleService } from '../missing-people.service';
import { MessageService } from '../message-handler.service';
import { Person } from '../person';
import { AgmCoreModule } from '@agm/core';
import { Observable, Subject } from '../../../node_modules/rxjs';
import { MapPointerComponent } from '../map-pointer/map-pointer.component';
@Component({
  selector: 'app-missing-people',
  templateUrl: './missing-people.component.html',
  styleUrls: ['./missing-people.component.css']
})
export class MissingPeopleComponent implements OnInit {
  title : string = "Missing Persons Report";
  @Input() person: Person;
  People : Person[];
  selectedPerson : Person;
  SelectedPerson = false;
  constructor(private missingPeopleService: MissingPeopleService,private messageService: MessageService) { }
  DisplayInformation(perp: Person): void{
    this.selectedPerson = perp;
    this.SelectedPerson = true;
  }
  ngOnInit() {
    this.getMissing();
  }
getMissing():void{
  this.messageService.add('calling: getMissing() from missing-people.component');
  this.missingPeopleService.getMissing().subscribe(People => this.People = People.slice(1,5));
}
SawSomeone(): void{
  //pull up map let user click where they saw the selected person.
  //bring up a form with the map so a user can fill in location information, and opt to put address instead of clicking the map.
  //anonymous reports should not be allowed, need to be able to contact reporter.
}
}
