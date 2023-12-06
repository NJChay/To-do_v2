import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginErrorPopupComponent } from '../error/error.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  user: string = '';
  pword: string = '';
  constructor(
    private router: Router,
    private dialog: MatDialog,
  ) {
  }

  tryLogin() {
    console.log(this.user)
    if (this.user === "test") {
      this.router.navigate(['home']);
    } else {

      const dialogRef = this.dialog.open(LoginErrorPopupComponent, {
        data: { title: 'Login Error', message: 'Incorrect username or password' }})

    }
  }

  toSign() {
    this.router.navigate(['signup']);
  }

}
