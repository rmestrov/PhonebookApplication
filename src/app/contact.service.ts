import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Contact } from './contact';
import { CONTACTS } from './my-contacts';
import { MessageService } from './message.service';

@Injectable()
export class ContactService {

  private contactsUrl = 'api/contacts';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl);
  }

  getContact(id: number): Observable<Contact> {
    this.messageService.add(`ContactService: fetched contact id=${id}`);
    return of(CONTACTS.find(contact => contact.id === id));
  }

  private log(message: string) {
    this.messageService.add('ContactService: ' + message);
}

}
