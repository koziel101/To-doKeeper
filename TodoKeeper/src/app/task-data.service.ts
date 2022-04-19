import { Injectable } from '@angular/core';
import { Task } from './task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor() { }
  taskElements: Task[] = [];
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
