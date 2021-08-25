import { Injectable } from '@angular/core';
import { People } from '../../shared/models';

const KEY_LOCAL_STORAGE: string = 'people';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor() {}

  listAll(): People[] {
    const people = localStorage[KEY_LOCAL_STORAGE];
    return people ? JSON.parse(people) : [];
  }

  insert(people: People): void {
    const peoples = this.listAll();
    people.id = new Date().getTime();
    console.log(peoples);
    peoples.push(people);

    localStorage[KEY_LOCAL_STORAGE] = JSON.stringify(peoples);
  }

  findById(id: number): People | undefined {
    const people: People[] = this.listAll();

    return people.find((people) => people.id === id);
  }

  update(people: People): void {
    const peoples: People[] = this.listAll();
    peoples.forEach((element: any, index: any, objs: any) => {
      if (people.id === element.id) {
        console.log(people);
        objs[index] = people;
      }
    });

    localStorage[KEY_LOCAL_STORAGE] = JSON.stringify(peoples);
  }

  delete(id: number): void {
    let people: People[] = this.listAll();

    people = people.filter((people) => people.id !== id);

    localStorage[KEY_LOCAL_STORAGE] = JSON.stringify(people);
  }
}
