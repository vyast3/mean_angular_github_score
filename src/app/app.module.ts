import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

import { AppComponent } from './app.component';
import { GitScoreComponent } from './git-score/git-score.component';
import { ServicesService } from "./services.service";// <-- Imported

@NgModule({
  declarations: [
    AppComponent,
    GitScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule // <-- Include module in our AppModules
  ],
  providers: [ServicesService],// <-- Imported
  bootstrap: [AppComponent]
})
export class AppModule { }
