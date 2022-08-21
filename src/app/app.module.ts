import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoCardComponent } from './info-card/info-card.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ResultsContainerComponent } from './results-container/results-container.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoCardComponent,
    SearchbarComponent,
    SearchResultsComponent,
    ResultsContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
