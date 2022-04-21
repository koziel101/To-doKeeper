import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input('taskElement') element: Task;

  @Output('deleteTask') taskDeleted = new EventEmitter<{ position: number }>();

  public taskElements: Task[] = [];
  public containsTask;
  public taskDone;
  newPosition: number;

  constructor(private taskDataServ: TaskDataService) {
    this.taskElements = this.taskDataServ.getList();
    this.containsTask = this.taskDataServ.getContainsTask();
    this.taskDone = this.taskDataServ.getTaskDone();
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
