import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Task } from '../../Task';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbuttonComponent } from '../searchbutton/searchbutton.component';
import { TASKS } from '../../basic-tasks';
import { DelbtnComponent } from '../delbtn/delbtn.component';
import {v4 as uuidv4} from 'uuid';


@Component({
  selector: 'app-searchheader',
  standalone: true,
  imports: [CommonModule, SearchbuttonComponent, FormsModule, DelbtnComponent],
  templateUrl: './searchheader.component.html',
  styleUrl: './searchheader.component.css'
})
export class SearchheaderComponent implements OnInit{
  constructor(
    private router: Router,
    private http: HttpClient
  ) { 
    
  }
  ngOnInit(): void {
    
  }
  newTask(name: string) {
    let task = {
      id: uuidv4(),
      title: name,
      completed: false
    }
    if (name !== "") {
      console.log(1);
      this.http.post('http://127.0.0.1:8000/post', task).subscribe((response) => {});

      TASKS.push(task);
      localStorage.setItem("main",JSON.stringify(TASKS));
    }
  } 
  toDetails() {
    this.router.navigate(['/details']);
  }


}
