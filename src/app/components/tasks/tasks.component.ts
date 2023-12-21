import { Component,Input, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit{

  tasks : Task[] = [];
  

  constructor(private taskServ :TaskService){
   
  }

  ngOnInit(): void {
   this.taskServ.getTasks().subscribe((tasks) => this.tasks= tasks);
  }

  deleteTaskFromList(task :Task){
    this.taskServ.deleteTask(task).subscribe(()=>this.tasks =this.tasks.filter(t => t.id !== task.id));
  }

  toggleTaskItem(task: Task){
    task.reminder = !task.reminder;
    this.taskServ.updateTask(task).subscribe();
  }

  submitForm(task :Task){
    this.taskServ.addTask(task).subscribe((task) => this.tasks.push(task))
  }
}
