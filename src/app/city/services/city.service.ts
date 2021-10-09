import { Injectable } from '@angular/core';
import { City } from '../../shared/models';

const KEY_LOCAL_STORAGE: string = 'city';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor() {}

  listAll(): City[] {
    const city = localStorage[KEY_LOCAL_STORAGE];
    return city ? JSON.parse(city) : [];
  }

  insert(city: City): void {
    const cities = this.listAll();
    city.id = new Date().getTime();

    cities.push(city);

    localStorage[KEY_LOCAL_STORAGE] = JSON.stringify(city);
  }

  findById(id: number): City | undefined {
    const cities: City[] = this.listAll();

    return cities.find((city) => city.id === id);
  }

  update(city: City): void {
    const cities: City[] = this.listAll();
    cities.forEach((element: any, index: any, objs: any) => {
      if (city.id === element.id) {
        console.log(city);
        objs[index] = city;
      }
    });

    localStorage[KEY_LOCAL_STORAGE] = JSON.stringify(cities);
  }

  delete(id: number): void {
    let cities: City[] = this.listAll();

    cities = cities.filter((city) => city.id !== id);

    localStorage[KEY_LOCAL_STORAGE] = JSON.stringify(cities);
  }
}
