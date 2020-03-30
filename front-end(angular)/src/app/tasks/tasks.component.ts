import { Component, OnInit } from '@angular/core'

import { Todo } from './task'
import { TasksService } from './tasks.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  providers: [TasksService],
  styleUrls: ['./task.component.scss']
})
export class TasksComponent implements OnInit {
  todos: Todo[]
  editTodo: Todo

  constructor(private taskService: TasksService) {}

  ngOnInit() {
    this.getTasks();
  }

  cancel(){
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(todos =>{
      this.todos = todos;
      console.log(this.todos);
      })
    }

  add(title: string,description: string, dueDate:string): void {
    this.editTodo = undefined;
    title = title.trim();
    description = description.trim();
    dueDate= dueDate.trim();
    if (!title) {
      alert("Title can't be blank!");
      return;
    }
    const newTask: Todo = { title, description, dueDate } as Todo
    this.taskService.addTask(newTask).subscribe(task => this.todos.push(task))
  }
  edit(todo) {
    this.editTodo = todo
  }

  update() {
    console.log(this.editTodo);
    if (this.editTodo) {
        delete this.editTodo['createdDate'];
        delete this.editTodo['modifiedDate'];
        this.taskService.updateTask(this.editTodo).subscribe(todo => {
        const indexx = todo ? this.todos.findIndex(t => t._id === todo._id) : -1
        if (indexx > -1) {
          this.todos[indexx] = todo
        }
      })
      this.editTodo = undefined
    }
    else{
      alert("Click on any one of the Todo Item to edit and update.")
    }
        
  }
  delete(todo: Todo): void {

    this.todos = this.todos.filter(t => t !== todo)
    this.taskService.deleteTask(todo._id).subscribe()
  }




}
