export class Address {
  public road?: string;
  public number?: string;
  public complement?: string;
  public district?: string;
  public cep?: string;
  public city?: string;
  public state?: string;

  constructor(
    road?: string,
    number?: string,
    complement?: string,
    district?: string,
    cep?: string,
    city?: string,
    state?: string
  ) {
    this.road = road;
    this.number = number;
    this.complement = complement;
    this.district = district;
    this.cep = cep;
    this.city = city;
    this.state = state;
  }
}
