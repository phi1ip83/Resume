import { Component, Input } from '@angular/core';
import { Skill } from '../dataTypes/Skill';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  @Input() item!:Skill;
}
