import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
      { id: 1, name: 'Mate' },
      { id: 2, name: 'Ante' },
      { id: 3, name: 'Kate' },
      { id: 4, name: 'Ivan' },
      { id: 5, name: 'Marija' },
      { id: 6, name: 'Ivo' },
      { id: 7, name: 'Ana' }
    ];
    return {contacts};
  }
}
