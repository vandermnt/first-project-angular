import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { People, Address } from 'src/app/shared/models';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-insert-people',
  templateUrl: './insert-people.component.html',
  styleUrls: ['./insert-people.component.css'],
})
export class InsertPeopleComponent implements OnInit {
  @ViewChild('formPeople') formPeople!: NgForm;
  people: People = {};
  address: Address = {};
  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit(): void {
    this.address = new Address();
    this.people = new People();
  }

  insert(): void {
    this.peopleService.insert(this.people, this.address);
    this.router.navigate(['/people']);
  }
}
