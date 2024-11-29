import { Component } from '@angular/core';
import { ExperienceComponent } from "../experience/experience.component";
import { SkillsComponent } from "../skills/skills.component";
import { EducationComponent } from "../education/education.component";
import { DatabaseService } from '../database.service';
import { Experience } from '../dataTypes/Experience';
import { Skill } from '../dataTypes/Skill';
import { Education } from '../dataTypes/Education';
import { FormControl, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginService } from '../login.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ExperienceComponent, SkillsComponent, EducationComponent, FormsModule, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  type:string = "web_dev";
  name?:string;

  skills:Skill[]=[];
  visableSkills:Skill[]=[];

  educations:Education[]=[];

  experiences:Experience[]=[];
  visableExperiences:Experience[]=[]

  constructor(private database:DatabaseService, private login:LoginService){}

  ngOnInit(){
    this.login.getName().subscribe(temp=>{
      if(temp){
        this.name=temp;
      }
    });
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


