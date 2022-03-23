import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface Activity{
  activityName: string,
  caloriesPerHour: number
}

export interface RecordedActivity{
  activityName: string,
  burnCalories:number
}

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  activities: Activity[] = [
    {activityName: 'Swimming', caloriesPerHour: 500},
    {activityName: 'Running', caloriesPerHour: 620},
    {activityName: 'Cycling', caloriesPerHour: 450},
    {activityName: 'Walking', caloriesPerHour: 320}
  ];

  recordedActivities: RecordedActivity[] = [];

  selectedActivity!: Activity;
  activityDuration!: number;
  @Output()
  burntCaloriesSummationEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  recordActivity(){
    let activityName = this.selectedActivity.activityName;
    let burntCalories = this.selectedActivity.caloriesPerHour * this.activityDuration;
    this.recordedActivities.push({activityName: activityName, burnCalories:burntCalories })

    let burnCaloriesSummation = this.recordedActivities.map(activity => activity.burnCalories).reduce((acc, cur) => acc+cur, 0);
      this.burntCaloriesSummationEvent.emit(burnCaloriesSummation)
  }
}
