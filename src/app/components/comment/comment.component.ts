import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelbtnComponent } from '../delbtn/delbtn.component';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, DelbtnComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input() task: string | undefined;
  @Input() user: string | undefined;
  @Input() text: string | undefined;
  @Input() likes: string | undefined;
}
