import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  // tasks: Task[] = [];
  // tasks: Task[] = [
  //   new Task("Descricao 1"),
  //   new Task ("Testt")
  // ];

  @Input('taskElement') element: { description: string; isDone: boolean; };

  ngOnInit(): void {
  }

  public taskElements: { description: string, isDone: boolean }[] = [];
  public containsTask;

  constructor(private taskDataServ: TaskDataService) {
    this.taskElements = this.taskDataServ.getList();
    this.containsTask = this.taskDataServ.getContainsTask();
  }

  public deleteTask(position: number) {
    this.taskElements.splice(position, 1);
    if (this.taskElements.length === 0) {
      this.containsTask = false;
    }
  }
}
