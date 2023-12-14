import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotService } from '../../../services/chatbot.service';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';
import { DelbtnComponent } from "../../delbtn/delbtn.component";
import { LoadmanageService } from '../../../services/loadmanage.service';

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
    private loadmanageService: LoadmanageService
    ) {}

  generateText(data:textResponse) {
    this.loadmanageService.openLoading();
    this.openaiService.generateText(data.text).then(text => {
      this.loadmanageService.hideLoading();
      data.response = text;
      console.log(data.response)
      if(this.textList.length===data.sno){
        //this.textList.push({sno:1,text:'',response:''});
      }
    }).catch(err => {
      this.loadmanageService.hideLoading();
       console.log(err)
    });
  }

  toHome() {
    this.router.navigate(['home'])
  }

}
