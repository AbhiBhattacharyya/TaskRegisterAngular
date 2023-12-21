import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import { Observable,of } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
})
}
@Injectable({
  providedIn: 'root'
})


export class TaskService {

  private url = "http://localhost:3000/tasks"
  constructor(private Http : HttpClient) { }

  getTasks() : Observable<Task[]>{
  
    return this.Http.get<Task[]>(this.url);
  }

   deleteTask(task :Task) : Observable<Task>{
     const deleteURL =`${this.url}/${task.id}`;
     return this.Http.delete<Task>(deleteURL)
  }

  updateTask(task :Task) : Observable<Task[]>{
    const updateUrl =`${this.url}/${task.id}`;
   return this.Http.put<Task[]>(updateUrl,task,httpOptions);
 }

 addTask(task : Task) : Observable<Task>{
  return this.Http.post<Task>(this.url,task,httpOptions);
 }
}
