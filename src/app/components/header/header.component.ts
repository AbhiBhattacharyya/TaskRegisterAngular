import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title: string = 'Task Manager';
  toggleAddTask : boolean = false;


  constructor(private uiService : UiService,private route:Router){
    uiService.onToggle().subscribe(val=> this.toggleAddTask = val)
  }

  toggle(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route:string){
   return this.route.url === route;
  }
}
