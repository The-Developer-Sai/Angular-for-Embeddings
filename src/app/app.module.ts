import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule for two-way binding
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { SavedComponent } from './components/saved/saved.component';
import { ChatComponent } from './components/chat/chat.component'; // Import ChatComponent
import { RagValidationComponent } from './components/rag-validation/rag-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    SavedComponent,
    ChatComponent,   // Declare ChatComponent
    RagValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,      // Add FormsModule for handling form inputs
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
