
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DelbtnComponent } from '../delbtn/delbtn.component';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule, DelbtnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit{
  title: string = 'Our Tasks';
  constructor(
    private router: Router,
  ) { 
    
  }
  ngOnInit(): void {
    
  }
  
}
