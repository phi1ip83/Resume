import { Component, Input } from '@angular/core';
import { Experience } from '../dataTypes/Experience';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  @Input() item!:Experience;
  @Input() user?:string;
}
