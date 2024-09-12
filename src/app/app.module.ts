import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule for making HTTP requests

@NgModule({
  declarations: [AppComponent, FileUploadComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],  // Ensure FormsModule is imported
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
