import { Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/login/main/main.component';
import { SignupComponent } from './components/login/signup/signup.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'details', component: DetailsComponent},
    { path: '', component: MainComponent},
    { path: 'signup', component: SignupComponent}
];
