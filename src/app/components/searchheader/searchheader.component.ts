import { Task } from './../../Task';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbuttonComponent } from '../searchbutton/searchbutton.component';
import { TASKS } from '../../basic-tasks';


@Component({
  selector: 'app-searchheader',
  standalone: true,
  imports: [CommonModule, SearchbuttonComponent],
  templateUrl: './searchheader.component.html',
  styleUrl: './searchheader.component.css'
})
export class SearchheaderComponent implements OnInit{
  constructor() { 
    
  }
  ngOnInit(): void {
    
  }
  newTask(name: string) {
    let task = {
      name,
      checked: false
    }
    if (localStorage.length === 0) {
      let tasks: Task[]= [];
      localStorage.setItem("main",JSON.stringify(tasks))
    }
    //let newTasks: Task[] = JSON.parse(localStorage.getItem("main")).push(task);
  } 

}
