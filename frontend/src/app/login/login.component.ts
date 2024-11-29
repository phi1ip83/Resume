import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name=new FormControl("philip");
  password=new FormControl("pass");
  message = "";

  constructor(private login:LoginService, private router:Router){}

  submit(){
    this.login.login({name:this.name.getRawValue(), password:this.password.getRawValue()}).subscribe(temp=>{
      
      if(temp.status == 201){
        this.message = "You have logged in."
        this.router.navigate(['/']).then(()=>{
          window.location.reload();
        });

    
      }else{
        this.message = temp.message
        
      }
      
    });
    
  }
}
