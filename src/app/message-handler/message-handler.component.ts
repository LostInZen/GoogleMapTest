import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message-handler.service';
@Component({
  selector: 'app-message-handler',
  templateUrl: './message-handler.component.html',
  styleUrls: ['./message-handler.component.css']
})
export class MessageHandlerComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
