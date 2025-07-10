import { Component, inject } from '@angular/core';
import { TodoForListModel } from '../../../../models_/todo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../../../services_/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})
export class Edit {
  todoForUpdate:TodoForListModel =new TodoForListModel();
  router:Router=inject(Router);
  documentId:string='';

  constructor(private todoService:TodoService , private route:ActivatedRoute,){}

  ngOnInit(): void{
    this.documentId=this.route.snapshot.paramMap.get('documentId')!;
    this.todoService.getTodoBydocumentId(this.documentId).subscribe((res)=>{
      console.log(res.data[0]);
      const todoData=res.data[0];
      if(todoData){
        this.todoForUpdate.documentId=todoData.documentId;
        this.todoForUpdate.title=todoData.title;
        this.todoForUpdate.description=todoData.description;
        this.todoForUpdate.date=todoData.data;
      }
    })
  }


  editTodo(){
    this.todoService.editTodo(this.todoForUpdate).subscribe(()=>{
      console.log('done');
      this.router.navigate(['./list'])
    })
  }

}
