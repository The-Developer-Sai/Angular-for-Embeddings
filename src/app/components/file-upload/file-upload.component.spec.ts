import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileUploadComponent } from './file-upload.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileUploadComponent],
      imports: [HttpClientTestingModule, FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a file input', () => {
    const compiled = fixture.nativeElement;
    const input = compiled.querySelector('input[type="file"]');
    expect(input).toBeTruthy();
  });

  it('should disable the submit button when loading', () => {
    component.loading = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button[type="submit"]');
    expect(button.disabled).toBeTruthy();
  });
});
