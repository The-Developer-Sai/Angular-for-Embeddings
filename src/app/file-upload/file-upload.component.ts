import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  selectedModel: string = '';  
  fileToUpload: File | null = null;  
  loading: boolean = false;  
  results: any[] = [];  // To store current results
  savedResults: any[] = [];  // To store saved results
  showForm: boolean = false;  // Show or hide form
  showSaved: boolean = false;  // Show or hide saved results
  showChatPage: boolean = false;  // Show or hide chat section
  showRagPage: boolean = false;   // Show or hide RAG validation section

  constructor(
    private http: HttpClient, 
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('FileUploadComponent loaded');
  }

  // Show the form
  preProcess() {
    this.resetView();
    this.showForm = true;
  }

  // Show saved results
  showSavedResults() {
    this.resetView();
    this.showSaved = true;
  }

  // Show chat page
  showChat() {
    this.resetView();
    this.showChatPage = true;
  }

  // Show RAG Validation page
  showRagValidation() {
    this.resetView();
    this.showRagPage = true;
  }

  // Handle file selection
  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.fileToUpload = file;
  }

  // Handle form submission and result generation
  onSubmit(event: Event, fileInput: any) {
    event.preventDefault();

    if (!this.fileToUpload || !this.selectedModel) {
      alert('Please select a file and a model!');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.fileToUpload);
    formData.append('model_choice', this.selectedModel);

    this.loading = true;
    this.cdr.detectChanges();  // Force Angular to detect changes

    this.http.post('http://localhost:5000/upload', formData).subscribe(
      (response: any) => {
        this.results.push(response);  
        this.loading = false;
        this.cdr.detectChanges();  

        // Clear the file input and reset model selection
        fileInput.value = '';  
        this.fileToUpload = null;  
        this.selectedModel = '';  
      },
      (error) => {
        console.error('Error:', error);
        this.loading = false;
        this.cdr.detectChanges();
      }
    );
  }

  // Save result and remove from results array
  saveResult(result: any) {
    this.savedResults.push(result); 
    const index = this.results.indexOf(result);
    if (index > -1) {
      this.results.splice(index, 1); 
    }
    this.cdr.detectChanges(); 
  }

  // Discard result from the results array
  leaveResult(result: any) {
    const index = this.results.indexOf(result);
    if (index > -1) {
      this.results.splice(index, 1); 
    }
    this.cdr.detectChanges(); 
  }

  // Reset all views to only show one section at a time
  resetView() {
    this.showForm = false;
    this.showSaved = false;
    this.showChatPage = false;
    this.showRagPage = false;
  }
}
