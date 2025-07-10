import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoForListModel, TodoForSaveModel } from '../models_/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl='http://localhost:1337/api/todos';

  constructor(private http:HttpClient) { }

  getTodos():Observable<{data:TodoForListModel[]}>{
    return this.http.get<{data:TodoForListModel[]}>(this.apiUrl);
  }

  addTodo(data:TodoForSaveModel):Observable<{data:TodoForSaveModel}>{
    return this.http.post<{data:TodoForSaveModel}>('http://localhost:1337/api/todos', {data:{
      title:data.title,
      description:data.describtion,
    }})
  }

  getTodoBydocumentId(documentId:string):Observable<{data:any[]}>{
    return this.http.get<{data:any[]}>(`http://localhost:1337/api/todos?filter[documentId][$eq]=${documentId}`)
  }

deleteTodo(id:string):Observable<any>{
  console.log(id);
  return this.http.delete(`http://localhost:1337/api/todos/${id}`)
}

  
}
