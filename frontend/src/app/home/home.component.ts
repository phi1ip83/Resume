import { Component } from '@angular/core';
import { ExperienceComponent } from "../experience/experience.component";
import { SkillsComponent } from "../skills/skills.component";
import { EducationComponent } from "../education/education.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ExperienceComponent, SkillsComponent, EducationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
