package com.elbit.todo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.elbit.todo.domain.TodoItem;
import com.elbit.todo.repository.TodoListRepo;

@Controller
public class RestController {

	@Autowired
	private TodoListRepo todoListRepo;

	@RequestMapping(method = RequestMethod.PUT, value = "/add")
	public @ResponseBody void addTodo(@RequestBody TodoItem todoListItem) {
		todoListRepo.save(todoListItem);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/remove/{todoItemId}")
	public @ResponseBody void removeTodo(@PathVariable String todoItemId) {
		todoListRepo.deleteById(todoItemId);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/updateTodoItem/{todoItemId}")
	public @ResponseBody void setTodoItem(@RequestBody TodoItem todoItem, @PathVariable("todoItemId") String todoItemId)
			throws Exception {
		
		Optional<TodoItem> todosOp = todoListRepo.findById(todoItemId);
		
		if (todosOp.isPresent()) {
			if (todoItem.getId() == null) {
				todoItem.setId(todoItemId);
			}
			todoListRepo.save(todoItem);
		} else {
			throw new Exception("could not find given id " + todoItemId + ".");
		}

	}

	@RequestMapping("getAll")
	public @ResponseBody List<TodoItem> getAll() {
		return todoListRepo.findAll();
	}

	@RequestMapping("getByName/{name}")
	public @ResponseBody List<TodoItem> getByName(@PathVariable("name") String name) {
		return todoListRepo.findByName(name);
	}
}
