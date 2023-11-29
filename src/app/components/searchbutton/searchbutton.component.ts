import { FormsModule } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-searchbutton',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './searchbutton.component.html',
  styleUrl: './searchbutton.component.css'
})
export class SearchbuttonComponent implements OnInit{
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
