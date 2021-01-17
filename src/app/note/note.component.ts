import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit  {
  edit: boolean = false;
  newContent: string;
  newCategoryId: string;
  category: object;
  categories: object[];
  label: string;

  @Input() note: any;
  @Output() deleted = new EventEmitter<string>();
  @Output() updated = new EventEmitter<string>();

  constructor(
    private apiService: ApiService
  ) {}

   ngOnInit() {
    this.newContent = this.note.content;

   this.apiService.getCategories().subscribe((data: object[]) => {
      console.log(data);
      this.categories = data;
      if(this.note.categoryId){
        this.category = this.categories.find(cat => {
          return cat['id'] == this.note.categoryId;
        })
        this.label = this.category['label'];
        console.log(this.category);
      }     
    });
   }

   onDeleteClick = () => {
    this.deleted.emit(this.note.id);
  }

   changeEditStatus = () => {
     if (this.edit) {
       this.edit = false;
     }
     else this.edit = true;
   }

   undoEdit = () => {
      this.edit = false;
      this.newContent = this.note.content;
  }

  updateNote = () => {
    if (!this.newContent){
      window.alert('Voeg tekst toe aan de notitie. De wijzigingen werden niet bewaard.');
    } else {
      this.apiService.updateNoteForUser(this.note.userId, this.note.id , this.newContent, this.newCategoryId).subscribe((result: any) => {
        let error = result.error;
  
        if (error) {
          console.log(`Error: ${error}`);
        } else {
          this.edit = false;
          this.updated.emit();
        }
      });
    }
    
  };

}
