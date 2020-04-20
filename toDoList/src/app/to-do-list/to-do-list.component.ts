import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})


export class ToDoListComponent implements OnInit {
  public taskList: object[];
  public toDoListName = 'ToDoLIstDefault';
  public messages = '';
  edit: boolean;
  taskName: string;
  constructor( ) {}

  ngOnInit(): void {
    this.taskName = '';
    this.taskList = [
      {
        taskName: 'economie',
        status: true,
        edit: false

      },

      {
        taskName: 'Covid',
        status: false,
        edit: false
      }
    ];
  }

}
