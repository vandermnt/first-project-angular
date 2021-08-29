export class State {
  public id?: string;
  public name?: string;
  public initials?: string;

  constructor(id?: string, name?:string, initials?: string) {
    this.id = id;
    this.name = name;
    this.initials = initials;
  }
}
