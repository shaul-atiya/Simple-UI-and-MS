import { Observable } from 'rxjs';
import { Todo } from './../../service/Todo';
import { HttpinterceptorServiceService } from './../../service/interceptor/httpInterceptor-service.service';
import { TodoListServiceService } from './../../service/todo-list-service.service';
import { TodoItemSaveComponent } from "../todo-item-save/todo-item-save.component";
import { Component, OnInit } from "@angular/core";
import { MatBottomSheet } from "@angular/material";

@Component({
  selector: "app-todo-items",
  templateUrl: "./todo-items.component.html",
  styleUrls: ["./todo-items.component.css"]
})
export class TodoItemsComponent implements OnInit { 
  todoItems: Array<Todo>;

  constructor(
    private todoService: TodoListServiceService,
    private bottomSheet: MatBottomSheet,
    private appinterceptorService:HttpinterceptorServiceService
  ) {}
 
  ngOnInit() {
    this.getAllItems()
  }

  getAllItems()
    {
       this.todoService.getAllTodoItems().subscribe(res => {
       this.todoItems = res;
      });
    }

  updateChecked(item: Todo) {
    item.done = !item.done;
    this.todoService.updateItem(item).subscribe(res => {this.getAllItems()});
  }

  openSaveTodo() {
    this.bottomSheet.open(TodoItemSaveComponent).afterDismissed().subscribe(isSaved=>{
      isSaved && this.getAllItems();
    });
  }

  removeItem(item: Todo) {
    this.todoService.removeItem(item).subscribe(res => {this.getAllItems()}); 
  }

  editItem(item: Todo) {
    let assignedObj = new Todo();
    
    this.copyTodoItem(item,assignedObj);
    this.bottomSheet.open(TodoItemSaveComponent, { data: assignedObj }).afterDismissed().subscribe(isSaved=>{
      isSaved && this.getAllItems();
  });
}

  copyTodoItem(src:Todo,trg:Todo) {
    trg.description = src.description;
    trg.done = src.done;
    trg.id= src.id;
    trg.name = src.name;
  }

  updateItems(event:Todo[]) {
    this.todoItems = event;
  }
}
