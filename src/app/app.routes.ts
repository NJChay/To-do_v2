import { Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { AnimComponent } from './components/anim/anim.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'details', component: DetailsComponent },
    { path: 'anim', component: AnimComponent}
];
