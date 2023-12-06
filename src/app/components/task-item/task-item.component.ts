import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { SearchbuttonComponent } from '../searchbutton/searchbutton.component';
import { TASKS } from '../../basic-tasks';
import { DelbtnComponent } from '../delbtn/delbtn.component';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, SearchbuttonComponent, DelbtnComponent],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task | undefined

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  checkChange(task: Task | undefined) {

    const toChange = TASKS.find(item => item.id === task?.id);
    let newtask = {
      id: toChange?.id,
      title: toChange?.title,
      completed: !toChange?.completed,
      owner_id: toChange?.owner_id
    }
    this.http.put('http://127.0.0.1:8000/put', newtask).subscribe((response) => {});

    if (toChange) {
      toChange.completed = !toChange.completed
    }
    localStorage.setItem("main",JSON.stringify(TASKS));
    
  }

  deleteItem(task: Task | undefined) {
    const taskNeedDelete = TASKS.find(item => item.id === task?.id);
    if (taskNeedDelete) {
      let httpParams = new HttpParams().set("id", taskNeedDelete.id)
      let options = { params: httpParams};
      this.http.delete('http://127.0.0.1:8000/delete', options).subscribe((response) => {});

      const index = TASKS.indexOf(taskNeedDelete);
      if (index > -1) {
        TASKS.splice(index, 1);
      }
    }
    localStorage.setItem("main",JSON.stringify(TASKS));
  }
}
