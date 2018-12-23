package com.elbit.todo.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class TodoItem {
	@Id
	String id;
	private String name;
	private String description;
	private boolean isDone;
	
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public boolean isDone() {
		return isDone;
	}
	public void setDone(boolean isDone) {
		this.isDone = isDone;
	}
	public TodoItem( String name, String description, boolean isDone) {
		super();
		
		this.name = name;
		this.description = description;
		this.isDone = isDone;
	}
	
	@Override
	public boolean equals(Object obj) {
		
		return (obj instanceof TodoItem) && ((TodoItem) obj).getId().equals(this.getId());
		
	}
		@Override
		public int hashCode() {
				return id.hashCode();
		}
	
	
	
	
	
	
		
	

}
