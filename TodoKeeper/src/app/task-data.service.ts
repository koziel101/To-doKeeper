import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor() { }
  taskElements: { description: string, isDone: boolean }[] = [];

  getList() {
    return this.taskElements;
  }

  createTask() {

  }
}
