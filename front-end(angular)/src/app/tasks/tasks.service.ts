import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";

import { Todo } from "./task";

@Injectable()
export class TasksService {

 public rootURL= "http://localhost:6800";
  constructor( public http : HttpClient) {
  }
  getTasks(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.rootURL+"/todolist")
  }
  addTask(todo: Todo): Observable<Todo> {
    return this.http
      .post<Todo>(this.rootURL+"/todolist", todo)
  }
  updateTask(todo: Todo): Observable<Todo> {
    return this.http
      .put<Todo>(this.rootURL+`/todolist/${todo._id}`, todo)
  }
  deleteTask(id: number): Observable<{}> {
    const url =this.rootURL+ `/todolist/${id}`;
    return this.http
      .delete(url)
  }


}
