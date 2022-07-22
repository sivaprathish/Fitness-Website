import { Component } from '@angular/core';

@Component({
  selector: 'app-calorie',
  templateUrl: './calorie.component.html',
  styleUrls: ['./calorie.component.css']
})
export class CalorieComponent  {
  public weight!: number;
  public height!: number;
  public age!:number;
  public Activity!:number;
  public result!: number;
  
  enter(){
    this.result = (88.362 + (13.397 *this.weight ) + (4.799 * this.height ) - (5.677 * this.age ))*this.Activity ;
   }
  
}
