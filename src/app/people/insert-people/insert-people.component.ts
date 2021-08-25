import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { People } from 'src/app/shared/models';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-insert-people',
  templateUrl: './insert-people.component.html',
  styleUrls: ['./insert-people.component.css'],
})
export class InsertPeopleComponent implements OnInit {
  @ViewChild('formPeople') formPeople!: NgForm;
  people: People = {};
  constructor(private pessoaService: PeopleService, private router: Router) {}

  ngOnInit(): void {
    this.people = new People();
  }

  insert(): void {
    this.pessoaService.insert(this.people);
    this.router.navigate(['/people']);
  }
}
