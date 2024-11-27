import { Component, Input } from '@angular/core';
import { Skill } from '../dataTypes/Skill';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  @Input() item!:Skill;
}
