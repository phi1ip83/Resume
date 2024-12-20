import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EducationComponent } from './update/education/education.component';
import { ExperienceComponent } from './update/experience/experience.component';
import { SkillComponent } from './update/skill/skill.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"login", component:LoginComponent},
    {path:"education/:id", component:EducationComponent},
    {path:"experience/:id", component:ExperienceComponent},
    {path:"skill/:id", component:SkillComponent},
    {path:"**", redirectTo:"/home", pathMatch:"full"}
];
