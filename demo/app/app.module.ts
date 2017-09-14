import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EcomProductZoomModalModule } from '../..';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EcomProductZoomModalModule
  ],
  exports: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
