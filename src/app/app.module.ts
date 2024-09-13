import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <-- Add this

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';  // <-- Add this for HTTP client

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // <-- Add this to allow [(ngModel)]
    HttpClientModule  // <-- Required for HttpClient in FileUploadComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
