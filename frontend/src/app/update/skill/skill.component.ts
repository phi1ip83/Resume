import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatabaseService } from '../../database.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../../dataTypes/Skill';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  name = new FormControl();
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
      this.points.setValue("")
      return;
    }

    this.database.getSkill(this.id).subscribe(temp=>{
      if(temp === null){
        this.router.navigate(['/experience/-1']);
        return;
      }
      
      this.name.setValue(temp.name);
      this.points.setValue(temp.points?.join('\n'));
    });

    
    
    
  }
  
  submit(){
    let name:string = this.name.getRawValue();
    let points:string[] = this.points.getRawValue().split('\n');
    let skill:Skill = {id:undefined, name:name, points:points, tags:this.tags}


    if(this.id !==-1){
      skill.id = this.id;
      this.database.updateSkill(this.id, skill).subscribe(temp=>console.log(temp));
    }else{
      this.database.createSkill(skill).subscribe(temp=>console.log(temp));
    }
    this.router.navigate(['/home']);

  }
  delete(){
    this.database.deleteSkill(this.id).subscribe(temp=>{
      console.log(temp);
      this.router.navigate(['/home'])
    
    });
    
  }

}
