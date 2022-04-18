import { Component } from '@angular/core';
import { TaskDataService } from './task-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoKeeper';

  public containsTask;
  // taskElements: { description: string, isDone: boolean }[] = [];

  public taskElements: { description: string, isDone: boolean }[] = [];

  constructor(private taskDataServ: TaskDataService) {
    this.taskElements = this.taskDataServ.getList();
    this.containsTask = this.taskDataServ.getContainsTask();
  }

  onTaskCreated(taskData: { taskDescription: string }) {
    this.taskElements.push({
      description: taskData.taskDescription,
      isDone: false
    });
    this.containsTask = true;
  }

  // public deleteTask(position: number) {
  //   this.tasks.splice(position, 1);
  //   if (this.tasks.length === 0) {
  //     this.containsTask = false;
  //   }
  // }

  // public taskDoneUndone() {
  //   if (this.taskDone) {
  //     this.taskDone = false;
  //   } else {
  //     this.taskDone = true;
  //   }
  // }
}
