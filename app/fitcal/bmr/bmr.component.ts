import { Component,  } from '@angular/core';

@Component({
  selector: 'app-bmr',
  templateUrl: './bmr.component.html',
  styleUrls: ['./bmr.component.css']
})
export class BmrComponent  {

  public weight!: number;
  public height!: number;
  public age!:number;
  public result!: number;

 enter(){
  this.result = 88.362 + (13.397 *this.weight ) + (4.799 * this.height ) - (5.677 * this.age ) ;
 }


}
