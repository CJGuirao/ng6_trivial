import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { RequestService} from './request.service';
import { MainComponent } from './main/main.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TrivialComponent } from './trivial/trivial.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TrivialComponent,
    CardComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, NgbModule.forRoot(), FormsModule
  ],
  providers: [{ provide: RequestService, useClass: RequestService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
