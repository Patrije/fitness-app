import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface Food{
  foodName:string,
  calories: number
}

export interface RecordedFood{
  foodName: string,
  eatenCalories: number
}

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {

  foods: Food[] = [
    {foodName:'bread', calories:500},
    {foodName: 'milk', calories:100},
    {foodName: 'cola', calories: 300},
    {foodName: 'bar', calories:560}
  ]

  foodAmount!:number;
  selectedFood!:Food;

  recordedFoods: RecordedFood[]=[];

  @Output()
  eatenCaloriesSummationEvent = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  recordFood(){
    let foodName=this.selectedFood.foodName;
    let eatenCalories = this.selectedFood.calories * this.foodAmount;
    this.recordedFoods.push({foodName: foodName, eatenCalories:eatenCalories});

    let eatenCaloriesSummation = this.recordedFoods.map(food => food.eatenCalories).reduce((acc, cur) => acc+cur, 0);
    this.eatenCaloriesSummationEvent.emit(eatenCaloriesSummation);
  }

}
