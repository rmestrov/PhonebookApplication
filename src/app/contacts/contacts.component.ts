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

  constructor(private contactService: ContactService) { }

getContacts(): void {
      this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
    }

  ngOnInit() {
    this.getContacts();
  }

  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.contactService.addContact({ name } as Contact)
    .subscribe(hero => {
      this.contacts.push(hero);
    });
  }

  delete(contact: Contact): void {
  this.contacts = this.contacts.filter(h => h !== contact);
  this.contactService.deleteContact(contact).subscribe();
}


}
