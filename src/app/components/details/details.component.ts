import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TASKS } from '../../basic-tasks';
import { filter } from 'rxjs';
import { Router } from '@angular/router';
import { DelbtnComponent } from "../delbtn/delbtn.component";
@Component({
    selector: 'app-details',
    standalone: true,
    templateUrl: './details.component.html',
    styleUrl: './details.component.css',
    imports: [CommonModule, MatSlideToggleModule, DelbtnComponent]
})
export class DetailsComponent  {
  constructor(
    private router: Router,
  ) {

  }
  remaining: number = JSON.parse(localStorage.getItem("main") || "{}").length
  complete: number = JSON.parse(localStorage.getItem("main") || "{}").filter(function(element: { checked: boolean; }){
    return element.checked == true;
}).length
toHome() {
  this.router.navigate(['home']);
}
}
