import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Banana1Component } from './component/banana1/banana1.component';
import { Banana2Component } from './component/banana2/banana2.component';
import { Banana3Component } from './component/banana3/banana3.component';

@NgModule({
  declarations: [
    AppComponent,

    Banana1Component,
    Banana2Component,
    Banana3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
