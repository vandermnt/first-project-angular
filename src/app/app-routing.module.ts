import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  ListPeopleComponent,
  InsertPeopleComponent,
  EditPeopleComponent,
} from './people';

const routes: Routes = [
  { path: '', redirectTo: 'people/list', pathMatch: 'full' },
  { path: 'people', redirectTo: 'people/list' },
  {
    path: 'people/list',
    component: ListPeopleComponent,
  },
  {
    path: 'people/new',
    component: InsertPeopleComponent,
  },
  {
    path: 'people/update/:id',
    component: EditPeopleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
