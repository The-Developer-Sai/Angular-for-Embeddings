import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { SavedComponent } from './components/saved/saved.component';
import { ChatComponent } from './components/chat/chat.component';  // Import ChatComponent
import { RagValidationComponent } from './components/rag-validation/rag-validation.component';

const routes: Routes = [
  { path: 'pre-process', component: FileUploadComponent },
  { path: 'saved', component: SavedComponent },
  { path: 'chat', component: ChatComponent },  // Route for ChatComponent
  { path: 'rag-validation', component: RagValidationComponent },
  { path: '', redirectTo: '/pre-process', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
