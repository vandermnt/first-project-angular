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
}
