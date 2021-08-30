import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { StateService } from './services';
import { ListStateComponent } from './list-state/list-state.component';
import { InsertStateComponent } from './insert-state/insert-state.component';

@NgModule({
  declarations: [ListStateComponent, InsertStateComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [StateService],
})
export class StateModule {}
