import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCityComponent } from './list-city/list-city.component';
import { InsertCityComponent } from './insert-city/insert-city.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CityService } from './services/city.service';

@NgModule({
  declarations: [ListCityComponent, InsertCityComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [CityService],
})
export class CityModule {}
