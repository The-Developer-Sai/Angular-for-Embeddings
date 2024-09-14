import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  selectedModel: string = '';
  results: any[] = [];
  savedResults: any[] = [];
  loading: boolean = false;

  showForm: boolean = false;
  showSaved: boolean = false;
  showChatPage: boolean = false;
  showRagPage: boolean = false;

  constructor(private http: HttpClient) {}

  // When the file is selected
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // Handle the form submission
  onSubmit(event: Event, fileInput: any) {
    event.preventDefault();

    if (this.selectedFile && this.selectedModel) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('model', this.selectedModel);

      // Show loading spinner
      this.loading = true;

      // Call the backend to process the file
      this.http.post<any>('http://localhost:5000/upload', formData).subscribe(
        (response) => {
          this.results = [response];  // Assuming the backend returns one result at a time
          this.loading = false;
        },
        (error) => {
          console.error('Error uploading file:', error);
          this.loading = false;
        }
      );
    }
  }

  // Navigation to show different sections
  preProcess() {
    this.showForm = true;
    this.showSaved = false;
    this.showChatPage = false;
    this.showRagPage = false;
  }

  showSavedResults() {
    this.showForm = false;
    this.showSaved = true;
    this.showChatPage = false;
    this.showRagPage = false;
  }

  showChat() {
    this.showForm = false;
    this.showSaved = false;
    this.showChatPage = true;
    this.showRagPage = false;
  }

  showRagValidation() {
    this.showForm = false;
    this.showSaved = false;
    this.showChatPage = false;
    this.showRagPage = true;
  }

  // Save the result
  saveResult(result: any) {
    this.savedResults.push(result);
    alert('Result saved successfully!');
  }

  // Leave the result
  leaveResult(result: any) {
    this.results = this.results.filter(r => r !== result);
  }
}
