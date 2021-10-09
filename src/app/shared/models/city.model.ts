import { State } from './state.model';

export class City {
  public id?: number;
  public name?: string;
  public state?: State;

  constructor(id?: number, name?: string, state?: State) {
    this.id = id;
    this.name = name;
    this.state = state;
  }
}
