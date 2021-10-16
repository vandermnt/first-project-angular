import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PeopleService } from './services/people.service';
import { ListPeopleComponent } from './list-people/list-people.component';
import { InsertPeopleComponent } from './insert-people/insert-people.component';
import { EditPeopleComponent } from './edit-people/edit-people.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { SharedModule } from '../shared';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ListPeopleComponent,
    InsertPeopleComponent,
    EditPeopleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    SharedModule,
  ],
  providers: [PeopleService],
})
export class PeopleModule {}
