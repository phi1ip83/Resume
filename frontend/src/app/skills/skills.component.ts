import { Component, Input } from '@angular/core';
import { Skill } from '../dataTypes/Skill';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  @Input() item!:Skill;
  @Input() user?:string;
}
