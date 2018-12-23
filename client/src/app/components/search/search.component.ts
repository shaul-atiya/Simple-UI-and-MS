import { TodoListServiceService } from "./../../service/todo-list-service.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Todo } from "../../service/Todo";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  searchName: string;
  @Output() todoResoults = new EventEmitter<Array<Todo>>();
  
  constructor(private todoListServiceService: TodoListServiceService) {}

  ngOnInit() {}

  searchByName() {
    this.searchName && this.todoListServiceService.searchByName(this.searchName).subscribe(res => {
          this.todoResoults.emit(res);
        });
  }

  clearSearchAndFindAll()
  {
    this.searchName ="";

    this.todoListServiceService.getAllTodoItems().subscribe(res => {
      this.todoResoults.emit(res);
    });
  }
}
