import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleModule, StateModule } from './';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PeopleModule, StateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
