import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemSaveComponent } from './todo-item-save.component';

describe('TodoItemSaveComponent', () => {
  let component: TodoItemSaveComponent;
  let fixture: ComponentFixture<TodoItemSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
