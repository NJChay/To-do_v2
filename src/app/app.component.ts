import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SearchheaderComponent } from './components/searchheader/searchheader.component';
import { TasksComponent } from './components/tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SearchheaderComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'To Do';
  todos = [
    { key: 0, title: 'a' }, { key: 0, title: 'b' }, { key: 0, title: 'a' }, { key: 0, title: 'a' },
  ];
  flg = false;

  handleClick(data: any): void {
    
  }

  
}
