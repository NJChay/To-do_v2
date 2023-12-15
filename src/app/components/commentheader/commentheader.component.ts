import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelbtnComponent } from '../delbtn/delbtn.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commentheader',
  standalone: true,
  imports: [CommonModule, DelbtnComponent],
  templateUrl: './commentheader.component.html',
  styleUrl: './commentheader.component.css'
})
export class CommentheaderComponent {
  constructor(
    private router: Router,
  ){

  }

  toLog() {
    this.router.navigate(['']);
  }
  toSug() {
    this.router.navigate(['suggest']);
  }

  toHome() {
    this.router.navigate(['home']);
  }

}
