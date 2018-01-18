import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

   contacts: Contact[];

   selectedContact: Contact;

  constructor(private contactService: ContactService) { }

getContacts(): void {
      this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
    }

  ngOnInit() {
    this.getContacts();
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }

}
