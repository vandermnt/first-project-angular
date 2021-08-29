import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleModule, CityModule } from './';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PeopleModule, CityModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
