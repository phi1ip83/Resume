import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatabaseService } from '../../database.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from '../../dataTypes/Experience';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  name = new FormControl();
  date = new FormControl();
  points = new FormControl();
  tags=['web_dev']
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

    this.database.getExperience(this.id).subscribe(temp=>{
      if(temp === null){
        this.router.navigate(['/experience/-1']);
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
    let experience:Experience = {id:undefined, name:name, date:date, points:points, tags:this.tags}


    if(this.id !==-1){
      experience.id = this.id;
      this.database.updateExperience(this.id, experience).subscribe(temp=>console.log(temp));
    }else{
      this.database.createExperience(experience).subscribe(temp=>console.log(temp));
    }
    this.router.navigate(['/home']);

  }
  delete(){
    this.database.deleteExperience(this.id).subscribe(temp=>{
      console.log(temp);
      this.router.navigate(['/home'])
    
    });
    
  }

}
