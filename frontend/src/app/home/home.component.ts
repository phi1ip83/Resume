import { Component } from '@angular/core';
import { ExperienceComponent } from "../experience/experience.component";
import { SkillsComponent } from "../skills/skills.component";
import { EducationComponent } from "../education/education.component";
import { DatabaseService } from '../database.service';
import { Experience } from '../dataTypes/Experience';
import { Skill } from '../dataTypes/Skill';
import { Education } from '../dataTypes/Education';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ExperienceComponent, SkillsComponent, EducationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private database:DatabaseService ){}


  ngOnInit(){
    let temp:Experience = {
      id:undefined,
      name:"yolo",
      date:"yolo",
      points:["yolo 1"],
      tags:["yolo"]
    }
    this.database.createExperience(temp).subscribe(response=> console.log(response))

    let temp2:Skill = {
      id:undefined,
      name:"yolo",
      points:["yolo 1"],
      tags:["yolo"]
    }
    this.database.createSkill(temp).subscribe(response=> console.log(response))
    let temp3:Education = {
      id:undefined,
      name:"yolo",
      date:"yolo",
      points:["yolo 1"],
    }
    this.database.createEducation(temp).subscribe(response=> console.log(response))
  }

}
