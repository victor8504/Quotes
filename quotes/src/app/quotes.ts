export class Quotes {
  public showDetails:boolean
  constructor(public name:string, public quote:string, public author:string, public date:Date){
    this.showDetails = false;

  }
}
