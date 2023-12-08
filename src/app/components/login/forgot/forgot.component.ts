import { User } from './../../../Task';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { env } from '../../../env/env';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginErrorPopupComponent } from '../error/error.component';
import { USERS } from '../../../basic-tasks';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.css'
})
export class ForgotComponent {
  email: string = '';
  constructor(
    private router: Router,
    private http: HttpClient,
    private dialog: MatDialog,
  ) {}
  findEmail() {
    let use = {
      id: "",
      name: "",
      email: this.email,
      password: ""
    }
    let allow = true;
    const apiURL = `${env.hostName}/forgot`;
    this.http.post(apiURL, use).subscribe((response) => {
      //USERS.push(response)
    }, err => {
      allow = false;
    });
    setTimeout(() => {   
      if (allow) {
        USERS.push(use)
        this.router.navigate(['newp'])
      } else {
        const dialogRef = this.dialog.open(LoginErrorPopupComponent, {
          data: { title: 'Email Not Found', message: 'Enter a new email to try again' }})
      }
    }, 100);
  }
}
