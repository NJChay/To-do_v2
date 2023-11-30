import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SearchheaderComponent } from './components/searchheader/searchheader.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TASKS } from './basic-tasks';
import { Task } from './Task';
import { TaskService } from './services/task.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SearchheaderComponent, TaskItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
