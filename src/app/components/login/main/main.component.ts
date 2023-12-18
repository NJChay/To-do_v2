import { User } from './../../../Task';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginErrorPopupComponent } from '../error/error.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { env } from '../../../env/env';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  user: string = '';
  pword: string = '';
  constructor(
    private router: Router,
    private http: HttpClient,
    private dialog: MatDialog,
  ) {
  }

  tryLogin() {
    let use = {
      id: "",
      name: this.user,
      email: "",
      password: this.pword
    }
    let allow = true;
    const apiURL = `${env.hostName}/login`;
    this.http.post(apiURL, use).subscribe((response) => {
    }, err => {
      allow = false;
    });
    setTimeout(() => {   
      if (allow) {
        localStorage.setItem("user", JSON.stringify(use))
        this.router.navigate(['home']);
      } else {
        const dialogRef = this.dialog.open(LoginErrorPopupComponent, {
          data: { title: 'Login Error', message: 'Incorrect username or password' }})
      }
    }, 100);
  }

  toSign() {
    this.router.navigate(['signup']);
  }

  forgotPass() {
    this.router.navigate(['forgot'])
  }

}
