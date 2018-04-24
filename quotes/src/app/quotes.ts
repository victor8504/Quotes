export class Quotes {
  public showDetails:boolean
  // public upVotes:number
  // public downVotes:number
  constructor(public name:string, public quote:string, public author:string, public date:Date){
    this.showDetails = false;

  }
}
