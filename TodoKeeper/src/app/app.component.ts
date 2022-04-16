import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoKeeper';

  public tasks: string[] = [];
  public newTask = "";
  containsTask = false;

  public addTask() {
    if (this.newTask != '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
      this.containsTask = true;
    }
  }

  public deleteTask(position: number) {
    this.tasks.splice(position, 1);
    if (this.tasks.length === 0) {
      this.containsTask = false;
    }
  }
}
