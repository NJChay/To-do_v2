import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Task } from '../../Task';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbuttonComponent } from '../searchbutton/searchbutton.component';
import { TASKS } from '../../basic-tasks';
import { DelbtnComponent } from '../delbtn/delbtn.component';
import {v4 as uuidv4} from 'uuid';
import { env } from '../../env/env';


@Component({
  selector: 'app-searchheader',
  standalone: true,
  imports: [CommonModule, HttpClientModule, SearchbuttonComponent, FormsModule, DelbtnComponent],
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
      id: 'none',
      title: name,
      completed: false,
      owner_id: JSON.parse(localStorage.getItem("user") || '{}').id
    }
    if (name !== "") {
      const apiURL = `${env.hostName}/post`;
      this.http.post(apiURL, task).subscribe((response) => {});

      TASKS.push(task);
      localStorage.setItem("main",JSON.stringify(TASKS));
    }
  } 
  toLog() {
    this.router.navigate(['']);
  }
  toSug() {
    this.router.navigate(['suggest']);
  }

  toCom() {
    this.router.navigate(['comments']);
  }


}
