import { Component, OnInit } from '@angular/core';
import { ToDoList } from './models/todoList.model';
import { ToDoItem } from './models/todoItem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private list = new ToDoList('Abraham', [
    new ToDoItem('Study Angular', false),
    new ToDoItem('Go to Swimming', false),
    new ToDoItem('Finish C# Beginner Course', true),
    new ToDoItem('Go for run', true),
    new ToDoItem('Get flowers'),
    new ToDoItem('Collect tickets'),
  ]);

  ngOnInit(): void {}

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.getItems().filter((item) => item.complete === false)
      .length;
  }

  get items(): readonly ToDoItem[] {
    return this.list.items;
  }
}
