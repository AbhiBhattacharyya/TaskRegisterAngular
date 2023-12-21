import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Output() deleteTask : EventEmitter<Task> = new EventEmitter();
  @Output() toggleTask : EventEmitter<Task> = new EventEmitter();
 
  faTimes = faTimes;
  constructor(private taskService :TaskService){
  }

  deteteItem(){
    this.deleteTask.emit();
  }

  onToggle(task : Task){
    this.toggleTask.emit();
  }

  @Input() task: Task;
}
