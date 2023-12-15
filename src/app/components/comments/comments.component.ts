import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../comment/comment.component';
import { DelbtnComponent } from '../delbtn/delbtn.component';
import { CommentheaderComponent } from '../commentheader/commentheader.component';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, CommentComponent, DelbtnComponent, CommentheaderComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

}
