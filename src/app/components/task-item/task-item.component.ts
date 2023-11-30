import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { SearchbuttonComponent } from '../searchbutton/searchbutton.component';
import { TASKS } from '../../basic-tasks';
import { DelbtnComponent } from '../delbtn/delbtn.component';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, SearchbuttonComponent, DelbtnComponent],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task | undefined

  constructor() {}

  checkChange(task: Task | undefined) {
    const toChange = TASKS.find(item => item.id === task?.id);
    if (toChange) {
      toChange.checked = !toChange.checked
    }
    localStorage.setItem("main",JSON.stringify(TASKS));
    
  }

  deleteItem(task: Task | undefined) {
    const taskNeedDelete = TASKS.find(item => item.id === task?.id);
    if (taskNeedDelete) {
      const index = TASKS.indexOf(taskNeedDelete);
      if (index > -1) {
        TASKS.splice(index, 1);
      }
    }
    localStorage.setItem("main",JSON.stringify(TASKS));
  }
}
