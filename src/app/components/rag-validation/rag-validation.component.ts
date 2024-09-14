import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';  // Import ChatService

@Component({
  selector: 'app-rag-validation',
  templateUrl: './rag-validation.component.html',
  styleUrls: ['./rag-validation.component.css']
})
export class RagValidationComponent implements OnInit {

  columnNames: string[] = ['Dimension 1', 'Dimension 2', 'Dimension 3'];  // Example column names
  embeddings: number[][] = [];  // Store embeddings data

  constructor(private chatService: ChatService) { }  // Inject ChatService

  ngOnInit(): void {
    this.loadEmbeddingsFromChatResult();
  }

  // Fetch embeddings from the chat result
  loadEmbeddingsFromChatResult(): void {
    const chatResult = this.chatService.getChatResult();

    if (chatResult) {
      // Mock embeddings based on the chat result (replace with actual API call)
      this.embeddings = [
        [0.12, 0.45, 0.87],
        [0.23, 0.56, 0.78],
        [0.34, 0.67, 0.89]
      ];
    }
  }
}
