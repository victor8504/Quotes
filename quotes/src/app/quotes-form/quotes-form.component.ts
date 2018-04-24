import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newQuote= new Quotes("", "", "", new Date());

  @Output() formComplete= new EventEmitter<Quotes>();

  onSubmit(newQuote){
    this.formComplete.emit(this.newQuote);
    }
  constructor() { }

  ngOnInit() {
  }

}
