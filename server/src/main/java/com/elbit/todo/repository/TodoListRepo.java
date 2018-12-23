package com.elbit.todo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.elbit.todo.domain.TodoItem;

@Repository
public interface TodoListRepo extends MongoRepository<TodoItem, String> {

	public List<TodoItem> findByName(String name);
	
}
