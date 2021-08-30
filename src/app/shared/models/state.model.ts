export class State {
  public id?: number;
  public name?: string;
  public initials?: string;

  constructor(id?: number, name?: string, initials?: string) {
    this.id = id;
    this.name = name;
    this.initials = initials;
  }
}
