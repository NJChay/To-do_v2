import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/login/main/main.component';
import { SignupComponent } from './components/login/signup/signup.component';
import { ForgotComponent } from './components/login/forgot/forgot.component';
import { NewpwordComponent } from './components/login/newpword/newpword.component';
import { SuggestionsComponent } from './components/suggest/suggestions/suggestions.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'details', component: DetailsComponent},
    { path: '', component: MainComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'forgot', component: ForgotComponent},
    { path: 'newp', component: NewpwordComponent},
    { path: 'suggest', component: SuggestionsComponent},
];
