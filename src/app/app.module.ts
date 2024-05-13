import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { EducationComponent } from './education/education.component';
import { LanguagesComponent} from "./languages/languages.component";
import {FrameworksComponent} from "./frameworks/frameworks.component";
import { InternshipComponent } from './internship/internship.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    EducationComponent,
    LanguagesComponent,
    FrameworksComponent,
    InternshipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

