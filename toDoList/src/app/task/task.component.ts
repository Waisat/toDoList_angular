import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public taskName: string;
  public status: boolean;
  public hello = '';
  @Input() parentData;
  @Input() taskTable;
  @Output() public childEvent = new EventEmitter();
   public messageAlert = {
    'status-not-checked': !this.status,
    'status-checked': this.status
  };
  constructor() {
  }

  ngOnInit(): void {
    this.childEvent.emit( this.taskTable = this.getLocalStorage());
    this.childEvent.emit( this.parentData = this.getTitleStorage());
  }
  editTitleOnClick(title){
    const TaskName = title.value;
    this.childEvent.emit( this.parentData = TaskName);
  }

  editOnClick(id, myEdit){
    const edition = myEdit.value;
    if (edition !== null){
      this.childEvent.emit( this.taskTable[id].taskName = edition);
    }
  }


  addTask(task){
    const getTask = task.value;
    console.log(task.value);
    task.value = '';
    this.childEvent.emit( this.taskTable.push(
        {
          taskName: getTask,
          status: true,
          edit: false
        }
      ));
  }

  deleteOnClick(id){
    this.taskTable.splice(id, 1);
  }

  saveLocalStorage(){
    localStorage.setItem('toDoListName', JSON.stringify(this.parentData));
    localStorage.setItem('toDoList', JSON.stringify(this.taskTable));
  }

  getLocalStorage(): object[]{
    const storage = JSON.parse(localStorage.getItem('toDoList'));
    return storage;
  }
  getTitleStorage(): string{
    const storageTitle = JSON.parse(localStorage.getItem('toDoListName'));
    return storageTitle;
  }
}
