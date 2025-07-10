import { Component, inject } from '@angular/core';
import { TodoForListModel, TodoForSaveModel } from '../../../../models_/todo.model';
import { TodoService } from '../../../../services_/todo';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [FormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {
  todo:TodoForSaveModel=new TodoForSaveModel ();
  router:Router=inject(Router);

  constructor(private todoService:TodoService){}

  saveTodo(){
    console.log('note value:', this.todo);
    if(!this.todo.date){
      this.todo.date=new Date();
    }
    this.todoService.addTodo(this.todo).subscribe(()=> {
      this.todo=new TodoForSaveModel;
      this.router.navigate(['/list'])
    })
  }


}
