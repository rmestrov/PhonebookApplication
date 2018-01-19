import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
      { id: 1,
        name: 'Mate',
        surname: 'Matic',
        address: 'Ulica Cvite Fiskovića',
        zipcode: 36261,
        city: 'Split',
        country: 'Croatia',
        phone1: 223456715,
        phone2: 98765424,
        email: 'mate@mail.com'
      },

      { id: 2,
        name: 'Ante',
        surname: 'Antic',
        address: 'Ruđera Boškovića',
        zipcode: 76543,
        city: 'Split',
        country: 'Croatia',
        phone1: 9876543,
        phone2: 876543,
        email: 'ante@mail.com'
      },

      { id: 3,
        name: 'Kate',
        surname: 'Matic',
        address: 'Neka ulica',
        zipcode: 987654,
        city: 'Zagreb',
        country: 'Croatia',
        phone1: 9835215,
        phone2: 6261366,
        email: 'Kate@mail.com'
      },

      { id: 4,
        name: 'Ivan',
        surname: 'Ivic',
        address: 'Ona ulica',
        zipcode: 14921840,
        city: 'Zadar',
        country: 'Croatia',
        phone1: 195809185,
        phone2: 93623636,
        email: 'ivan@mail.com'
      },

    ];
    return {contacts};
  }
}
