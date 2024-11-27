import { Component } from '@angular/core';
import { ExperienceComponent } from "../experience/experience.component";
import { SkillsComponent } from "../skills/skills.component";
import { EducationComponent } from "../education/education.component";
import { DatabaseService } from '../database.service';
import { Experience } from '../dataTypes/Experience';
import { Skill } from '../dataTypes/Skill';
import { Education } from '../dataTypes/Education';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ExperienceComponent, SkillsComponent, EducationComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  type:string = "web_dev";

  skills:Skill[]=[];
  visableSkills:Skill[]=[];

  educations:Education[]=[];

  experiences:Experience[]=[];
  visableExperiences:Experience[]=[]

  constructor(private database:DatabaseService){}

  ngOnInit(){
    this.database.getEducations().subscribe(temp=>{
      this.educations = temp;
    });
    this.database.getSkills().subscribe(temp=>{
      this.skills=temp;
      this.updateSkill()
    });
    this.database.getExperiences().subscribe(temp=>{
      this.experiences = temp;
      this.updateExp()
    });
  }
  updateExp(){
    this.experiences.forEach(item =>{
      if(item.tags?.includes(this.type)){
        this.visableExperiences.push(item);
      }
    });
  }
  updateSkill(){
    this.skills.forEach(item =>{
      if(item.tags?.includes(this.type)){
        this.visableSkills.push(item);
      }
    });
  }
}


