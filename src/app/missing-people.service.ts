import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from './person';
import { Observable, of } from '../../node_modules/rxjs';
import { catchError, map, tap, take, takeUntil } from 'rxjs/operators';
import { PersonDetails } from './person-details';
import { MessageService } from './message-handler.service';
@Injectable({
  providedIn: 'root'
})
export class MissingPeopleService {
  private MissingPeopleUrl = 'api/MissingPeoples';
  private UnidentifiedPeoplesUrl = 'api/UnidentifiedPeoples';
  getMissing(): Observable<Person[]> {
    console.log('hit missing');
    this.MissingPeopleUrl;
    return this.http.get<Person[]>(this.MissingPeopleUrl);
  }
  getMissingById(id:number): Observable<Person>{
    this.messageService.add('calling: getMissingDetails() from missing-people.service');
    const url = `${this.MissingPeopleUrl}/${id}`;
    return this.http.get<Person>(url).pipe(
      catchError(this.handleError<Person>(`getMissingById id=${id}`)
    ));
  }
  getMissingNo404<Data>(id: number): Observable<Person> {
    const url = `${this.MissingPeopleUrl}/?id=${id}`;
    return this.http.get<Person[]>(url)
      .pipe(
        map(people => people[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} person id=${id}`);
        }),
        catchError(this.handleError<Person>(`getMissingById id=${id}`))
      );
  }
  searchMissing(term: string): Observable<Person[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Person[]>(`${this.MissingPeopleUrl}/?City=${term}`).pipe(
      tap(_ => this.log(`found People matching "${term}"`)),
      catchError(this.handleError<Person[]>('searchPeople', []))
    );
  }
  getCoordinates(city:string ,state:string):Promise<any>{
    //go to google to get lat and long from city and state
    
    const url = "https://maps.googleapis.com/maps/api/geocode/json?address="+city+", "+ state+"&key=AIzaSyAT0-rkxdnGzSCRIK95DPfs7TkOdNvvZjw";
    return this.http.get(url).toPromise();
    // console.log(x);
    
    // return ["51.678418","7.809007"];
  }
  constructor(private http: HttpClient,private messageService: MessageService) { }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
