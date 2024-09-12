import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  selectedModel: string = '';
  loading: boolean = false;
  results: any = null;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  // Handle file selection
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // Handle form submission
  onSubmit(event: Event) {
    event.preventDefault();

    if (!this.selectedFile || !this.selectedModel) {
      alert('Please select a file and a model.');
      return;
    }

    // Create FormData to send file and model selection
    const formData = new FormData();
    formData.append('file', this.selectedFile as Blob);
    formData.append('model', this.selectedModel);

    this.loading = true;
    this.errorMessage = '';

    // Send request to Flask API
    this.http.post('http://localhost:5000/upload', formData).subscribe(
      (response: any) => {
        this.results = response;
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        this.errorMessage = 'Error processing the file. Please try again.';
      }
    );
  }
}
