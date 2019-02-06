import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MissingPersonComponent } from './missing-person/missing-person.component';
import { MissingPeopleComponent } from './missing-people/missing-people.component';
import { MapPointerComponent } from './map-pointer/map-pointer.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../app/in-memory-data.service';
import { AgmCoreModule } from '@agm/core';
import { MessageHandlerComponent } from './message-handler/message-handler.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { UnidentifiedPersonComponent } from './unidentified-person/unidentified-person.component';
import { UnidentifiedPeopleComponent } from './unidentified-people/unidentified-people.component';

@NgModule({
  declarations: [
    AppComponent,
    MissingPersonComponent,
    MissingPeopleComponent,
    MapPointerComponent,
    MessageHandlerComponent,
    DashboardComponent,
    SearchComponent,
    UnidentifiedPersonComponent,
    UnidentifiedPeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AgmCoreModule.forRoot({apiKey : "API KEY HERE"}),
    AppRoutingModule
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
