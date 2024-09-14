import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';  // Import ChatService

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages = [
    { sender: 'bot', text: 'Hello! How can I assist you today?' }
  ];

  userMessage: string = '';

  constructor(private chatService: ChatService) { }

  sendMessage() {
    if (this.userMessage.trim() === '') return;

    // Add the user's message to the chat
    this.messages.push({ sender: 'user', text: this.userMessage });

    // Mock response from the bot
    setTimeout(() => {
      const response = this.getBotResponse(this.userMessage);
      this.messages.push({ sender: 'bot', text: response });

      // Save the chat result in the service for RAG validation
      this.chatService.setChatResult(response);
    }, 1000);

    // Clear the input field
    this.userMessage = '';
  }

  getBotResponse(userMessage: string): string {
    if (userMessage.toLowerCase().includes('hello')) {
      return 'Hi there! How can I help you today?';
    } else if (userMessage.toLowerCase().includes('help')) {
      return 'I am here to assist you with any questions you have.';
    } else {
      return 'I am sorry, I do not understand that. Can you try asking differently?';
    }
  }
}
