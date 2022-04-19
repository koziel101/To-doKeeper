import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input('taskElement') element: { description: string; isDone: boolean; };

  ngOnInit(): void {
  }

  public taskElements: { description: string, isDone: boolean }[] = [];
  public containsTask;
  public taskDone;

  constructor(private taskDataServ: TaskDataService) {
    this.taskElements = this.taskDataServ.getList();
    this.containsTask = this.taskDataServ.getContainsTask();
    this.taskDone = this.taskDataServ.getTaskDone();
  }

  public deleteTask(position: number) {
    this.taskElements.splice(position, 1);
    if (this.taskElements.length === 0) {
      this.containsTask = false;
    }
  }

  public taskDoneUndone() {
    if (this.taskDone) {
      this.taskDone = false;
    } else {
      this.taskDone = true;
    }
  }
}
