import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { addToDo, toggleToDo, removeToDo } from '../actions';
import { ITodo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select() todos;

  model: ITodo = {
    id: 0,
    description: '',
    responsible: '',
    priority: 'low',
    isCompleted: false
  };

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.ngRedux.dispatch(addToDo({...this.model}));
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch(toggleToDo(todo.id));
  }

  removeTodo(todo) {
    this.ngRedux.dispatch(removeToDo(todo.id));
  }
}
