import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatabaseService } from '../../database.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from '../../dataTypes/Education';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  name = new FormControl();
  date = new FormControl();
  points = new FormControl();
  id!:number;

  constructor(private database:DatabaseService, private active:ActivatedRoute, private router:Router){}

  ngOnInit(){
    const temp = this.active.snapshot.paramMap.get('id');
    
    if(!temp){
      this.router.navigate(['/home']);
      return;
    }
    this.id = parseInt(temp);

    if(this.id===-1){
      this.name.setValue("")
      this.date.setValue("")
      this.points.setValue("")
      return;
    }

    this.database.getEducation(this.id).subscribe(temp=>{
      if(temp === null){
        this.router.navigate(['/education/-1']);
        return;
      }
      
      this.name.setValue(temp.name);
      this.date.setValue(temp.date);
      this.points.setValue(temp.points?.join('\n'));
    });

    
    
    
  }
  
  submit(){
    let name:string = this.name.getRawValue();
    let date: string = this.date.getRawValue();
    let points:string[] = this.points.getRawValue().split('\n');
    let education:Education = {name:name, date:date, points:points, id:undefined}


    if(this.id !==-1){
      education.id = this.id;
      this.database.updateEducation(this.id, education).subscribe(temp=>console.log(temp));
    }else{
      this.database.createEducation(education).subscribe(temp=>console.log(temp));
    }
    this.router.navigate(['/home']);

  }
  delete(){
    this.database.deleteEducation(this.id).subscribe(temp=>{
      console.log(temp);
      this.router.navigate(['/home'])
    
    });
    
  }

}
