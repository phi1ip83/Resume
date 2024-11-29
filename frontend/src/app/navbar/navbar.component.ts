import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../login.service';
import { CommonModule } from '@angular/common';
import { Observable, tap} from 'rxjs';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  name?:string
  observable!:Observable<string|undefined>;
  constructor(private login:LoginService){}
  ngOnInit(){
    this.observable = this.login.getName();
    this.observable.subscribe(temp=>{
      this.name=temp;
    })
  }
  logout(){
    this.login.logout();
    window.location.reload();
    
  }
}
