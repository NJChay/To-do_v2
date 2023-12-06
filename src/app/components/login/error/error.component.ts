import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-login-error-popup',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class LoginErrorPopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: { title: string; message: string }) {}
}
