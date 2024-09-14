import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreProcessService {
  private apiUrl = `${environment.apiUrl}/process`;  // Flask API URL

  constructor(private http: HttpClient) {}

  processFile(data: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);  // Send file and model to Flask
  }
}
