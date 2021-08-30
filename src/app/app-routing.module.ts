import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  ListPeopleComponent,
  InsertPeopleComponent,
  EditPeopleComponent,
} from './people';

import { ListStateComponent, InsertStateComponent } from './state';

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

  { path: 'state', redirectTo: 'state/list', pathMatch: 'full' },
  {
    path: 'state/list',
    component: ListStateComponent,
  },
  {
    path: 'state/new',
    component: InsertStateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
