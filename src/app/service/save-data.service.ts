import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecordedActivity } from '../training/training.component';
import { Observable } from 'rxjs';
import { RecordedFood } from '../diet/diet.component';


@Injectable({
  providedIn: 'root'
})
export class SaveDataService {

  constructor(private httpClient: HttpClient) { }

  saveActivity(activity: RecordedActivity): Observable<RecordedActivity> {
    return this.httpClient.post<RecordedActivity>("http://localhost:3000/activities",activity );
  }

  saveFood(food: RecordedFood): Observable<RecordedFood> {
    return this.httpClient.post<RecordedFood>("http://localhost:3000/foods",food );
  }

  getActivities():Observable<RecordedActivity[]>{
    return this.httpClient.get<RecordedActivity[]>("http://localhost:3000/activities" );
  }

  getFoods():Observable<RecordedFood[]>{
    return this.httpClient.get<RecordedFood[]>("http://localhost:3000/foods");
  }

}
