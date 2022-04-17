import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoKeeper';

  // public newTask = "";
  public containsTask = false;
  // public taskDone = false;

  taskElements: { description: string, isDone: boolean }[] = [];

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
