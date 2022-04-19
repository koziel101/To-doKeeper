import { Component } from '@angular/core';
import { TaskDataService } from './task-data.service';
import { Task } from './task/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoKeeper';

  public containsTask;
  public taskElements: Task[] = [];

  constructor(private taskDataServ: TaskDataService) {
    this.taskElements = this.taskDataServ.getList();
    this.containsTask = this.taskDataServ.getContainsTask();
  }

  onTaskCreated(taskData: { taskDescription: string }) {
    let newTaskElement: Task = <Task>{};
    newTaskElement.description = taskData.taskDescription;
    newTaskElement.isDone = false;
    this.taskElements.push(newTaskElement);
  }

  onTaskDeleted(position: number) {
    this.taskElements.splice(position, 1);
    if (this.taskElements.length === 0) {
      this.containsTask = false;
    }
  }
}
