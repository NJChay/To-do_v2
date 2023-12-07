import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginErrorPopupComponent } from '../error/error.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { env } from '../../../env/env';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  user: string = '';
  email: string = '';
  pword: string = '';
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private http: HttpClient
  ) {navigator
  }
  ngOnInit(): void {
    
  }

  exportUser(user: any, email: any, pword: any){
    let use = {
      id: "none",
      name: user,
      email: email,
      password: pword
    } 
    const apiURL = `${env.hostName}/postuser`;
    this.http.post(apiURL, use).subscribe((response) => {});
  }

  checkInput(){
    if (this.user === "" || this.pword === "" || this.email ==="") {
      this.dialog.open(LoginErrorPopupComponent, {
        data: { title: 'Signup Error', message: 'You must fill in all fields' }})
    
      } else if (this.pword.length < 8){
      this.dialog.open(LoginErrorPopupComponent, {
        data: { title: 'Password Error', message: 'Password must be at least 8 characters' }})
    
      } else if (!/\d/.test(this.pword)) {
      this.dialog.open(LoginErrorPopupComponent, {
        data: { title: 'Password Error', message: 'Password must contain a number' }})
    
      } else if (!/@/.test(this.email)) {
      this.dialog.open(LoginErrorPopupComponent, {
        data: { title: 'Email Error', message: 'Must be a valid email' }})
    
      } else {
        this.exportUser(this.user, this.email, this.pword);
        this.user = this.pword = this.email = ''
        this.dialog.open(LoginErrorPopupComponent, {
          data: { title: 'Signup successful!', message: '' }})
        this.router.navigate(['']);
    }
  }

}
