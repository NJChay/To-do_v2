import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../basic-tasks';
import { Observable, of } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
