import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PeopleService } from './services/people.service';
import { ListPeopleComponent } from './list-people/list-people.component';
import { InsertPeopleComponent } from './insert-people/insert-people.component';
import { EditPeopleComponent } from './edit-people/edit-people.component';
import { NumericDirective } from './directives/numeric.directive';
import { MinimumValidatorDirective } from './directives/minimum-validator.directive';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MyPipePipe } from './pipes/my-pipe.pipe';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ListPeopleComponent,
    InsertPeopleComponent,
    EditPeopleComponent,
    NumericDirective,
    MinimumValidatorDirective,
    MyPipePipe,
  ],
  imports: [CommonModule, RouterModule, FormsModule, NgxMaskModule],
  providers: [PeopleService],
})
export class PeopleModule {}
