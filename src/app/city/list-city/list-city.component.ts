import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';
import { City } from '../../shared/models';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css'],
})
export class ListCityComponent implements OnInit {
  cities: City[] = [];
  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.cities = this.listAll();
  }

  listAll() {
    return this.cityService.listAll();
  }

  delete($event: any, city: City) {}
}
