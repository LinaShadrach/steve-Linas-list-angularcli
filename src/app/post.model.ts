export class Post {
  public startDate = new Date();
  tempMonth = (new Date().getMonth()+1)%12 +1;
  months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  tempMonthName = this.months[this.tempMonth-1];
  public endDate = new Date("" + this.tempMonthName + this.startDate.getFullYear() + "");

  constructor (
    public title: string,
    public description: string,
    public imgURL: string,
    public price: number,
    public id: number
  ){
  }
}
