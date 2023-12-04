import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-anim',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anim.component.html',
  styleUrl: './anim.component.css',
  animations: [
    trigger('animateArc', [
      state('1', style({
        left: '1500px',
        top: '400px',
        backgroundColor: 'green'

      })),

      state('2', style({
        left: '0',
        top: '400px',
        backgroundColor: 'red'
        
      })),
      transition('2 => 1', animate('1000ms linear', keyframes([
        style({ left: '0',     top: '400px', offset: 0 }),
        style({ left: '750px', top: '700px', offset: 0.10 }),
        style({ left: '750px', top: '400px', offset: 0.20 }),
        style({ left: '1500px', top: '400px', offset: 0.30 }),
        style({ left: '0',     top: '400px', offset: 0.40 }),
        style({ left: '750px', top: '700px', offset: 0.50 }),
        style({ left: '750px', top: '400px', offset: 0.60 }),
        style({ left: '1500px', top: '400px', offset: 1 }),
      ]))),
      transition('1 => 2', animate('1000ms linear', keyframes([
        style({ left: '1500px', top: '400px', offset: 0 }),
        style({ left: '750px', top: '100px', offset: 0.50 }),
        style({ left: '0',     top: '400px', offset: 1 }),
      ])))
    ])
  ]
})
export class AnimComponent {
  arc: string = '2';

  toggleBounce(){
    switch(this.arc) {
      case '1':
        this.arc = '2'
        break
      case '2':
        this.arc = '1' 
        break
    }
  }
}
