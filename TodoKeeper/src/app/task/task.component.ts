import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  // tasks: Task[] = [];
  tasks: Task[] = [
    new Task("Descricao 1"),
    new Task ("Testt")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
