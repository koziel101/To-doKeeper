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

  @Output('deleteTask') taskDeleted = new EventEmitter<{ position: number }>();

  public taskElements: { description: string, isDone: boolean }[] = [];
  public containsTask;
  public taskDone;
  newPosition: number;

  constructor(private taskDataServ: TaskDataService) {
    this.taskElements = this.taskDataServ.getList();
    this.containsTask = this.taskDataServ.getContainsTask();
    this.taskDone = this.taskDataServ.getTaskDone();
  }

  deleteButtonClicked() {
    this.taskDeleted.emit({
      position: this.newPosition
    });
  }

  ngOnInit(): void {
  }

  onDeleteTask() {
    this.taskDeleted.emit({
      position: this.newPosition
    });
  }

  public taskDoneUndone() {
    if (this.taskDone) {
      this.taskDone = false;
    } else {
      this.taskDone = true;
    }
  }
}
