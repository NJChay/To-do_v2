import { FormsModule } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delbtn',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delbtn.component.html',
  styleUrl: './delbtn.component.css'
})
export class DelbtnComponent implements OnInit{
  @Input() text: string | undefined;
  @Input() class: string | undefined;
  @Output() btnClick = new EventEmitter();
  textValue: string = '';
  
  constructor() { 
    
  }
  ngOnInit(): void {
    
  }

  onClick() {
    this.btnClick.emit(this.textValue);
    setTimeout(() => {
      this.textValue = '';
    }, 100)
  }
}
