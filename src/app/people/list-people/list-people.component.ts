import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/shared/models';

import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css'],
})
export class ListPeopleComponent implements OnInit {
  people: People[] = [];

  constructor(private peopleservice: PeopleService) {}

  ngOnInit(): void {
    this.people = this.listAll();
  }

  listAll(): People[] {
    return this.peopleservice.listAll();
  }

  delete($event: any, people: People): void {
    $event.preventDefault();

    if (confirm(`Deseja realmente remover essa pessoa ${people.name} ?`)) {
      this.peopleservice.delete(people.id || 0);
      this.people = this.listAll();
    }
  }
}
