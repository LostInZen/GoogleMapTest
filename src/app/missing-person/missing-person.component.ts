import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { MissingPeopleService } from '../missing-people.service';
import { MessageService } from '../message-handler.service';
import { AgmCoreModule } from '@agm/core';
import { Observable } from '../../../node_modules/rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-missing-person',
  templateUrl: './missing-person.component.html',
  styleUrls: ['./missing-person.component.css']
})
export class MissingPersonComponent implements OnInit {
  @Input() person: Person;
  title : string = "Missing Persons Report";
  Person : Person;
  topPersonID : number = 1;
  constructor(
    private route: ActivatedRoute,
    private missingPeopleService: MissingPeopleService,
    private messageService: MessageService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMissingDetail();
  }
  getMissingDetail(): void {
    console.log("this value is = "+this.route.snapshot.paramMap.get('id'));
    if(this.route.snapshot.paramMap.get('id') != null){
      this.topPersonID = parseInt(this.route.snapshot.paramMap.get('id'));

    }
    const id = +this.route.snapshot.paramMap.get('id');
    this.missingPeopleService.getMissingById(this.topPersonID)
      .subscribe(Person => this.Person = Person);
  }
  getMissingDetails(id:number): Observable<Person> {
    this.messageService.add('calling: getMissingDetails() from missing-person.component');
    return this.missingPeopleService.getMissingById(id);
  }
  goBack(): void {
    this.location.back();
  }
  private log(message: string) {
    this.messageService.add(`missingPeopleService: ${message}`);
  }
  private MissingUrl = 'api/MissingPeople';
}
