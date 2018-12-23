import { Todo } from './Todo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListServiceService {
  private endpoint = "http://localhost:8080";
  constructor(private http:HttpClient) { }

  
  getAllTodoItems():Observable<Todo[]>
  {
   
   return <Observable<Todo[]>> this.http.get(this.endpoint + "/getAll");
  }

  updateItem(item:Todo)
  {
    return <Observable<Object>> this.http.post(this.endpoint + "/updateTodoItem/" +item.id,item );
  }

  saveItem(item:Todo)
  {
    return <Observable<Object>> this.http.put(this.endpoint +"/add",item);
  }

  removeItem(item:Todo)
  {
    return <Observable<Object>> this.http.delete(this.endpoint +"/remove/"+item.id);
  }

  editItem(item:Todo)
  {
    return <Observable<Object>> this.http.post(this.endpoint +"/updateTodoItem/"+item.id,item);
  }
  
}
