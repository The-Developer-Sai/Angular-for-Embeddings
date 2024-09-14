import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // This ensures that the service is available throughout the app
})
export class ChatService {
  private chatResult: any = null;  // Store chat result

  constructor() {}

  // Set the result from the chat
  setChatResult(result: any): void {
    this.chatResult = result;
  }

  // Get the result for RAG validation
  getChatResult(): any {
    return this.chatResult;
  }
}
