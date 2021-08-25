import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PeopleService } from './services/people.service';
import { ListPeopleComponent } from './list-people/list-people.component';
import { InsertPeopleComponent } from './insert-people/insert-people.component';
import { EditPeopleComponent } from './edit-people/edit-people.component';

@NgModule({
  declarations: [ListPeopleComponent, InsertPeopleComponent, EditPeopleComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [PeopleService],
})
export class PeopleModule {}
