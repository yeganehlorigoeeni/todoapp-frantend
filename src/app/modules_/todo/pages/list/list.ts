import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../../services_/todo';
import { CommonModule } from '@angular/common';
import { TodoForListModel } from '../../../../models_/todo.model';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css'
})

export class List implements OnInit {
  todos: TodoForListModel[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos(); 
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe((response) => {
      this.todos = response.data; 
    });
  }
  

  deleteTodo(id:string){
    this.todoService.deleteTodo(id).subscribe(()=>{
      this.todos= this.todos.filter(n => n.documentId !==id)
    })
  }
}



