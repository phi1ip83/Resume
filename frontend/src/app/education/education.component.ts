import { Component, Input } from '@angular/core';
import { Education } from '../dataTypes/Education';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  @Input() item!:Education;

}
