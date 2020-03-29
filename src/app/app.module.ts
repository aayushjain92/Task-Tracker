import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponentComponent } from './display-component/display-component.component';
import { FootComponentComponent } from './foot-component/foot-component.component';
import { HeadComponentComponent } from './head-component/head-component.component';
import { InputComponentComponent } from './input-component/input-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponentComponent,
    FootComponentComponent,
    HeadComponentComponent,
    InputComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
