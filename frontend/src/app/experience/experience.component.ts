import { Component, Input } from '@angular/core';
import { Experience } from '../dataTypes/Experience';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  @Input() item!:Experience;
}
