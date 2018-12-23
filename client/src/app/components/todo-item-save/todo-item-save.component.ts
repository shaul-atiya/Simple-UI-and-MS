import { Component, OnInit, Input, Inject } from "@angular/core";
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA
} from "@angular/material";
import { Todo } from "../../service/Todo";
import { TodoListServiceService } from "../../service/todo-list-service.service";

@Component({
  selector: "app-todo-item-save",
  templateUrl: "./todo-item-save.component.html",
  styleUrls: ["./todo-item-save.component.css"]
})
export class TodoItemSaveComponent implements OnInit {
  todoItem: Todo;
  isValid = false;

  constructor(
    private todolistService: TodoListServiceService,
    private bottomSheetRef: MatBottomSheetRef<TodoItemSaveComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: Todo
  ) {
    this.todoItem = data || new Todo();
  }

  ngOnInit() {}

  inputChanged(e: Event) {
    this.isValid = !!this.todoItem.name && !!this.todoItem.description;
  }

  saveItem() {
    
    if (!this.data) {
      this.todolistService.saveItem(this.todoItem).subscribe();
    }else{
      this.todolistService.editItem(this.todoItem).subscribe();
    }
    
    this.bottomSheetRef.dismiss(true)
  }
}
