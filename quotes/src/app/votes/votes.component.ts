import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  up: number = 0;
  down: number = 0;

  onUpvote() {
    return this.up += 1;
  }
  onDownvote() {
    return this.down += 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
