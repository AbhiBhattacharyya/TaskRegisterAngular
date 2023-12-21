import { Component,EventEmitter,Input ,Output} from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
@Output() submitTheForm : EventEmitter<Task> = new EventEmitter();
 text : string;
 day: string;
 reminder: boolean = false;
 
 toggleAddTask : boolean = true;

 constructor(private uiService : UiService){
   uiService.onToggle().subscribe(val=> this.toggleAddTask = val)
 }

 submitForm(){
  const newTask ={
   text : this.text,
   day : this.day,
   reminder : this.reminder
  }
  
  
  this.submitTheForm.emit(newTask);

  this.text = '';
  this.day = '';
  this.reminder = false;
 }

}


