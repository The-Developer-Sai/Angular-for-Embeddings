import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RagValidationService {
  private apiUrl = `${environment.apiUrl}/validate`;  // Use environment variable for API URL

  constructor(private http: HttpClient) {}

  getEmbeddings(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
