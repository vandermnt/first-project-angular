import { Injectable } from '@angular/core';

import { State } from '../../shared/models/state.model';

const KEY_LOCAL_STORAGE: string = 'states';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor() {}

  listAll(): State[] {
    const states = localStorage[KEY_LOCAL_STORAGE];
    return states ? JSON.parse(states) : [];
  }

  insert(state: State): void {
    const states: State[] = this.listAll();

    state.id = new Date().getTime();

    states.push(state);

    localStorage[KEY_LOCAL_STORAGE] = JSON.stringify(states);
  }

  findById(id: number): State | undefined {
    const states: State[] = this.listAll();

    return states.find((state) => state.id === id);
  }

  update(state: State): void {
    const states: State[] = this.listAll();

    states.forEach((obj, index, objs) => {
      if (state.id === obj.id) {
        objs[index] = state;
      }
    });

    localStorage[KEY_LOCAL_STORAGE] = JSON.stringify(states);
  }

  delete(id: number): void {
    let states: State[] = this.listAll();

    states = states.filter((state) => state.id !== id);

    localStorage[KEY_LOCAL_STORAGE] = JSON.stringify(states);
  }
}
