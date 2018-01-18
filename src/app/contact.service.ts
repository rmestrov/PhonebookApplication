import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Contact } from './contact';
import { CONTACTS } from './my-contacts';
import { MessageService } from './message.service';

@Injectable()
export class ContactService {

  constructor(private messageService: MessageService) { }

  getContacts(): Observable<Contact[]> {
    this.messageService.add('ContactService: fetched contacts');
    return of(CONTACTS);
  }

}
