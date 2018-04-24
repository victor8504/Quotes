import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quotes("Victor Njuguna","Speak what you seek until you see what you've said","~ Bobby Shmurda",new Date(2018,2,10)),
    new Quotes("Michel Antonio","The past is a place of reference, not a place of residence","~ Bruce Springsten",new Date(2018,1,17)),
    new Quotes("Dj Grooviq","Some people feel the rain others just get wet","~ Bob Marley",new Date(2018,3,23)),

  ]

  addNewQuote(quote){
    this.quotes.push(quote)
  }

  quoteDelete(index){
    if(index){
      this.quotes.splice(index,1)
    }
  }

  onClick(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  constructor() { }

  ngOnInit() {
  }

}
