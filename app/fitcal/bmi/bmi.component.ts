import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent  {
  public weight!: number;
  public height!: number;
  public result!: number;

 enter(){
  this.result = (this.weight / (this.height*this.height))*10000 ;
 }

 
}
