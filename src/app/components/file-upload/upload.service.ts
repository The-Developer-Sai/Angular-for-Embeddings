import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // This ensures the service is available application-wide
})
export class UploadService {
  constructor(private http: HttpClient) {}

  // Method to upload file and process with selected model
  uploadAndProcess(file: File, selectedModel: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('model', selectedModel);

    // API call to Flask backend
    return this.http.post('http://localhost:5000/process', formData);
  }
}
