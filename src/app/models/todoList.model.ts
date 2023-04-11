import { ToDoItem } from './todoItem.model';

export class ToDoList {
  constructor(public user: string, public items: ToDoItem[] = []) {}

  getItems(): readonly ToDoItem[] {
    return this.items;
  }
  addItem(task: string) {
    this.items.push(new ToDoItem(task));
  }
}
