import { Component, OnInit, Input } from '@angular/core';
import { MissingPeopleService } from '../missing-people.service';
import { MessageService } from '../message-handler.service';
import { Observable, Subject } from '../../../node_modules/rxjs';
import { Person } from '../person';
import { debounceTime, distinctUntilChanged, switchMap } from '../../../node_modules/rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  missingPeople$ : Observable<Person[]>;
  
  private searchTerms = new Subject<string>();
@Input() string: string;
SearchTerm: string;
  constructor(    private missingPeopleService: MissingPeopleService,private messageService: MessageService) { }
    search(term: string): void {
      this.searchTerms.next(term);
    }
  ngOnInit() {
    this.missingPeople$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.missingPeopleService.searchMissing(term)),
    );
    
  }

}
