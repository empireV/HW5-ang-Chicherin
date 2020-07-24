import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IToDo} from '../models/ito-do';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getTodo(): Observable<IToDo[]> {
    return this.httpClient.get<IToDo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  filterTodo(todos: IToDo[], completed: boolean): IToDo[] {
    return todos.filter(value => value.completed === completed);
  }

}
