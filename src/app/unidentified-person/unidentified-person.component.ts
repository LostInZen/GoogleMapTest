import { Component, OnInit } from '@angular/core';
import { Undentified } from '../unidentified';

@Component({
  selector: 'app-unidentified-person',
  templateUrl: './unidentified-person.component.html',
  styleUrls: ['./unidentified-person.component.css']
})
export class UnidentifiedPersonComponent implements OnInit {

  constructor() { }
  unidentified : Undentified;
  ngOnInit() {
  }

}
