import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';



@NgModule({
  declarations: [],
  imports: [
     FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule
  ]
})
export class AppModule { }
