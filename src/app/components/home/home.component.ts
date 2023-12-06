import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../../app.module';
import { SearchheaderComponent } from '../searchheader/searchheader.component';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TASKS } from '../../basic-tasks';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
import { HttpClient } from '@angular/common/http';
import { async, of } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchheaderComponent, TaskItemComponent, AppModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tasks: Task[] = [];
  constructor(
    private taskService: TaskService,
    private router: Router,
    private http: HttpClient
  ) {

  }

  ngOnInit(): void {
    localStorage.clear();
    while (TASKS.length !== 0) {
      TASKS.pop();
    }
    
    let datas: any;
    this.http.get('http://127.0.0.1:8000/').subscribe((response) => {
      datas = response
    })
    setTimeout(() => {
      datas.forEach((data: any) => {
        console.log(data);
        let newTask: Task = {
          title: data.title,
          completed: data.completed,
          id: data.id,
          owner_id: data.owner_id,
        }
        TASKS.push(newTask);
      })
    }, 100)

    
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);

  }


}
