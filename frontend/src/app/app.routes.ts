import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EducationComponent } from './update/education/education.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"login", component:LoginComponent},
    {path:"education/:id", component:EducationComponent},
    {path:"**", redirectTo:"/home", pathMatch:"full"}
];
