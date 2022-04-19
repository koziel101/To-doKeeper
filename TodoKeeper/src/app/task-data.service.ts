import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor() { }
  taskElements: { description: string, isDone: boolean }[] = [];
  containsTask = false;
  taskDone = false;

  getList() {
    return this.taskElements;
  }

  getContainsTask() {
    return this.containsTask;
  }

  getTaskDone() {
    return this.taskDone;
  }
}
