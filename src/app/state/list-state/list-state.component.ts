import { Component, OnInit } from '@angular/core';
import { State } from '../../shared/models';
import { StateService } from '../services';

@Component({
  selector: 'app-list-state',
  templateUrl: './list-state.component.html',
  styleUrls: ['./list-state.component.css'],
})
export class ListStateComponent implements OnInit {
  states: State[] = [];
  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.states = this.listAll();
  }

  listAll(): State[] {
    return this.stateService.listAll();
  }

  delete($event: any, $state: State): void {}
}
