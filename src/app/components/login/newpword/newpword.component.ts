import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { env } from '../../../env/env';
import { LoginErrorPopupComponent } from '../error/error.component';
import { USERS } from '../../../basic-tasks';

@Component({
  selector: 'app-newpword',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './newpword.component.html',
  styleUrl: './newpword.component.css'
})
export class NewpwordComponent {
  email: string = USERS.pop()?.email!
  newp: string = '';
  conf: string = '';
  constructor(
    private router: Router,
    private http: HttpClient,
    private dialog: MatDialog,
  ) {}
  updatePass() {
    if (this.newp !== this.conf || this.newp === ''){
      this.dialog.open(LoginErrorPopupComponent, {
        data: { title: 'Passwords Did not match', message: '' }})
      this.conf = ''
      this.newp = ''

    }  else if (this.conf.length < 8){
      this.dialog.open(LoginErrorPopupComponent, {
        data: { title: 'Password Error', message: 'Password must be at least 8 characters' }})
    
    } else if (!/\d/.test(this.conf)) {
      this.dialog.open(LoginErrorPopupComponent, {
        data: { title: 'Password Error', message: 'Password must contain a number' }})
    
    } else {

      let use = {
        id: "",
        name: "",
        email: this.email,
        password: this.conf
      }
      let allow = true;
      const apiURL = `${env.hostName}/recover`;
      this.http.put(apiURL, use).subscribe((response) => {
      }, err => {
        allow = false
      });
      setTimeout(() => {   
        if (allow) {
          const dialogRef = this.dialog.open(LoginErrorPopupComponent, {
            data: { title: 'Update Successful', message: '' }})
          this.router.navigate([''])
        }
      }, 100);
    }
  }
}
