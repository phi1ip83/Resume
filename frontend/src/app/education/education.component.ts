import { Component, Input } from '@angular/core';
import { Education } from '../dataTypes/Education';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  @Input() item!:Education;
  @Input() user?:string;

}
