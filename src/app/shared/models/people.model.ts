import { Address } from '../models';

export class People {
  public id?: number;
  public name?: string;
  public age?: number;
  public birthDate?: string;
  public address?: Address;

  constructor(
    id?: number,
    name?: string,
    age?: number,
    birthDate?: string,
    address?: Address
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.birthDate = birthDate;
    this.address = address;
  }
}
