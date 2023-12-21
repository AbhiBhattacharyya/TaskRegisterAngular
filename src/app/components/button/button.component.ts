import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})

export class ButtonComponent implements OnInit {
@Input() color: string;
@Input() text: string;
@Output() buttonClick = new EventEmitter();
constructor(){

}
ngOnInit(): void {
    
}

btnClick(){
  this.buttonClick.emit();
}
}
