import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Hal1Component } from './hal1/hal1.component';
import { RouterModule, Routes } from '@angular/router';
import { GlobalvarService } from './globalvar.service';

const ROUTES : Routes =[
  {path : 'hal1',component : Hal1Component},
  {path : 'hal1/:judul',component : Hal1Component},
]
@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(ROUTES)],
  declarations: [ AppComponent, HelloComponent, Hal1Component ],
  bootstrap:    [ AppComponent ],
  providers: [GlobalvarService]
})
export class AppModule { }
