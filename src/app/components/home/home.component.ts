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
    // setTimeout(() => {
    //   this.router.navigate(['/details']);
    // }, 5000);
    let datas: any;
    this.http.get('http://127.0.0.1:8000/').subscribe((response) => {
      datas = response
    })
    setTimeout(() => {
      datas.forEach((data: any) => {
        console.log(data);
        let newTask: Task = {
          name: data.title,
          checked: data.completed,
          id: data.id,
        }
        TASKS.push(newTask);
      })
    }, 100)


    if (localStorage.getItem("main") === null) {
      localStorage.setItem("main", JSON.stringify(TASKS));
    } else {
      const data = JSON.parse(localStorage.getItem('main') || '{}');
      data.forEach((task: Task) => { TASKS.push(task) });
    }
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);

  }
  toAnim() {
    this.router.navigate(['/anim']);
  }


}
