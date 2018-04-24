import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { DateCountPipe } from './date-count.pipe';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { VotesComponent } from './votes/votes.component';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    DateCountPipe,
    QuotesFormComponent,
    VotesComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
