import { Injectable } from '@angular/core';
import { OpenAI } from 'openai';
import { env } from '../env/env';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  
  openai = new OpenAI({
    apiKey:env.apiKey, dangerouslyAllowBrowser : true
  });
  constructor() { }

  generateText(prompt: string):Promise<string | null>{
    return this.openai.chat.completions.create({
         model: "gpt-3.5-turbo",
         messages: [
          {
            role: "system",
            content:
              "You recommend 10 to-do list tasks in dot point form based on a given topic and display the topic at the top",
            
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
