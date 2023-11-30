import { Task } from './../../Task';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbuttonComponent } from '../searchbutton/searchbutton.component';
import { TASKS } from '../../basic-tasks';


@Component({
  selector: 'app-searchheader',
  standalone: true,
  imports: [CommonModule, SearchbuttonComponent, FormsModule],
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
      checked: false,
      id: "" + Math.random()
    }
    if (name !== "") {
      TASKS.push(task);
      localStorage.setItem("main",JSON.stringify(TASKS));
    }
  } 

}
