import { Injectable } from '@angular/core';
import { Experience } from './dataTypes/Experience';
import { catchError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Education } from './dataTypes/Education';
import { Skill } from './dataTypes/Skill';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  private url = '/api'

  constructor(private http: HttpClient) { }

  //experience
  getExperiences():Observable<Experience[]>{
    return this.http.get<Experience[]>(this.url+'/experiences');
  }
  createExperience(experience:Experience):Observable<any>{
    const currentUrl = this.url +'/experience';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post<any>(currentUrl, experience, {headers})
   
  }
  getExperience(id:number):Observable<Experience>{
  
    const currentUrl = `${this.url}/experience/${id}`
    return this.http.get<Experience>(currentUrl);
  }
  updateExperience(id:number, experience:Experience){
    const currentUrl = `${this.url}/experience/${id}`
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(currentUrl, experience, {headers});

  }
  deleteExperience(id:number):Observable<any>{
    const currentUrl = `${this.url}/experience/${id}`
    return this.http.delete<any>(currentUrl);
  }


  //education
  getEducations():Observable<Education[]>{
    return this.http.get<Education[]>(this.url+'/Educations');
  }
  createEducation(education:Education):Observable<any>{
    const currentUrl = this.url +'/education';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post<any>(currentUrl, education, {headers})
   
  }
  getEducation(id:number):Observable<Education>{
    const currentUrl = `${this.url}/education/${id}`
    return this.http.get<Education>(currentUrl);
  }
  updateEducation(id:number, education:Education){
    const currentUrl = `${this.url}/education/${id}`
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(currentUrl, education, {headers});

  }
  deleteEducation(id:number):Observable<any>{
    const currentUrl = `${this.url}/education/${id}`
    return this.http.delete<any>(currentUrl);
  }

  //skill
  getSkills():Observable<Skill[]>{
    return this.http.get<Skill[]>(this.url+'/Skills');
  }
  createSkill(skill:Skill):Observable<any>{
    const currentUrl = this.url +'/skill';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post<any>(currentUrl, skill, {headers})
   
  }
  getSkill(id:number):Observable<Skill>{
    const currentUrl = `${this.url}/skill/${id}`
    return this.http.get<Skill>(currentUrl);
  }
  updateSkill(id:number, skill:Skill){
    const currentUrl = `${this.url}/skill/${id}`
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(currentUrl, skill, {headers});

  }
  deleteSkill(id:number):Observable<any>{
    const currentUrl = `${this.url}/skill/${id}`
    return this.http.delete<any>(currentUrl);
  }




}
