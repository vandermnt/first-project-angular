import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPeopleComponent, InsertPeopleComponent } from './people';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
