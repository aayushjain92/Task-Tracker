import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import {Item} from './listitem';

@Injectable()
export class ListManagerService {
  constructor(private http: HttpClient) {}

  getList():Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:6800/todolist')
  }

  getItem(id: string): Observable<Item> {
    return this.http.get<Item>('http://localhost:6800/todolist/' + id)
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>('http://localhost:8000/api/todolist/', item)
  }

  updateCat(item: Item): Observable<void> {
    return this.http.put<void>('http://localhost:6800/todolist/' + item.id, item)
  }

  removeItem(id: string) {
    return this.http.delete('http://localhost:6800/todolist/' + id)
  }
}