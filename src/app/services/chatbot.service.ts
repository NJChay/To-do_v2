import { Injectable } from '@angular/core';
import { OpenAI } from 'openai';
import { env } from '../env/env';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  
  openai = new OpenAI({
    apiKey:"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", dangerouslyAllowBrowser: true
  });
  constructor() { }

  generateText(prompt: string):Promise<string | null>{
    return this.openai.chat.completions.create({
         model: "gpt-3.5-turbo",
         messages: [
          {
            role: "system",
            content:
              "You recommend 15 to-do list tasks in dot point form based on a given topic",
            
          },
          {
            role: "user",
            content: prompt, 
          },
        ],
        temperature: 0,
        max_tokens: 1024,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
       }).then(response => {
        console.log(response.choices[0].message.content)
         return response.choices[0].message.content;
       }).catch(error=>{
        throw error;
         return '';
       });
   }
}
