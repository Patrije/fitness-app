import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fitness-app';

  calorieSaldo = 0;

  reduceCalories(calories:number){
    this.calorieSaldo = this.calorieSaldo - calories;
  }

  addCalories(calories: number){
    this.calorieSaldo = this.calorieSaldo +calories;
  }
}
