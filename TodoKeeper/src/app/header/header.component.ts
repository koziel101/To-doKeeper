import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() taskCreated = new EventEmitter<{ taskDescription: string, taskDone: boolean }>();
  newTaskDescription = '';
  newTaskDone = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAddTask() {
    this.taskCreated.emit({
      taskDescription: this.newTaskDescription,
      taskDone: this.newTaskDone
    });
  }

}
