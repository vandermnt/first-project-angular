import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from 'src/app/shared/models';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-edit-people',
  templateUrl: './edit-people.component.html',
  styleUrls: ['./edit-people.component.css'],
})
export class EditPeopleComponent implements OnInit {
  @ViewChild('formPeople') formPeople!: NgForm;
  people!: People;

  constructor(
    private pessoaService: PeopleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];

    const searchPeople = this.pessoaService.findById(id);
    console.log(searchPeople);
    if (searchPeople) {
      this.people = searchPeople;
    } else {
      throw new Error(`People not found: id = ${id}`);
    }
  }

  update(): void {
    if (this.formPeople.form.valid) {
      this.pessoaService.update(this.people);
      this.router.navigate(['/people']);
    }
  }
}
