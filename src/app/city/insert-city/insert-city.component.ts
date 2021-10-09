import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { City, State } from '../../shared/models';
import { StateService } from '../../state/services';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-insert-city',
  templateUrl: './insert-city.component.html',
  styleUrls: ['./insert-city.component.css'],
})
export class InsertCityComponent implements OnInit {
  @ViewChild('formCity') formCity!: NgForm;

  states: State[] = [];
  city: City = {};
  constructor(
    private cityService: CityService,
    private stateService: StateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.city = new City();
    this.states = this.stateService.listAll();
  }

  insert(): void {
    if (this.formCity.form.valid) {
      console.log(this.city);
      this.cityService.insert(this.city);
      this.router.navigate(['/city']);
    }
  }
}
