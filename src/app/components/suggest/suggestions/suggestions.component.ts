import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotService } from '../../../services/chatbot.service';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';
import { DelbtnComponent } from "../../delbtn/delbtn.component";

export class textResponse{
  sno:number=1;
  text:string='';
  response:any='';
}

@Component({
    selector: 'app-suggestions',
    standalone: true,
    templateUrl: './suggestions.component.html',
    styleUrl: './suggestions.component.css',
    imports: [CommonModule, FormsModule, MatInputModule, DelbtnComponent]
})
export class SuggestionsComponent {
  textList:textResponse[]=[{sno:1,text:'',response:''}];
  constructor(
    private openaiService: ChatbotService,
    private router: Router,
    ) {}

  generateText(data:textResponse) {
    this.openaiService.generateText(data.text).then(text => {
      data.response = text;
      console.log(data.response)
      if(this.textList.length===data.sno){
        //this.textList.push({sno:1,text:'',response:''});
      }
    }).catch(err => {
       console.log(err)
    });
  }

  toHome() {
    this.router.navigate(['home'])
  }

}
