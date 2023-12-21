import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrl: './footer-component.component.scss'
})
export class FooterComponentComponent {
  constructor(private router : Router){

  }

  hasRoute(route :string){
    return this.router.url === route;
  }

}
