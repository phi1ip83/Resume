import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { User } from './dataTypes/User';
import { map } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Token } from './dataTypes/Token';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url="/api"

  private name?:string;

  constructor(private http: HttpClient) { }

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
 
  updateUser(){
    const token = localStorage.getItem('token')
    if(token && !this.tokenExpired(token)){
      const temp:Token = jwtDecode(token);

      this.name = temp.name;
    }else if(token && this.tokenExpired(token)){
      this.logout();
    }
        
  }
  private setSession(temp:any){
    if(temp.token){
      localStorage.setItem('token', temp.token);
      this.updateUser();
    }
    return temp;
  }

  getName():Observable<string|undefined>{
    this.updateUser();
    return of(this.name);
  }
  logout(){
    this.name = undefined;
    localStorage.removeItem('token');
  }
  
  login(user:User):Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<JSON>(this.url+'/login', user, {headers})
    .pipe(
      map(temp =>this.setSession(temp)),
      shareReplay()
    );
  }
  

}
