import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
import { TASKS } from '../../basic-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
  tasks: Task[] = [];
  constructor(private taskService: TaskService) { 
     
  }
  ngOnInit(): void {
    if (localStorage.getItem("main") === null) {
      localStorage.setItem("main",JSON.stringify(TASKS));
    } else {
      const data = JSON.parse(localStorage.getItem('main') || '{}');
      data.forEach((task: Task) => {TASKS.push(task)});
    }
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }
}
