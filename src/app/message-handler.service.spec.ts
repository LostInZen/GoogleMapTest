import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message-handler.service';

describe('MessageHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));
});
