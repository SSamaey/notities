import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  noteId: string;
  userId: string;
  note: object;
  currentContent: string;
  newContent: string;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    const noteIdFromRoute = this.route.snapshot.paramMap.get('noteId');
    this.noteId = noteIdFromRoute;

    this.apiService.getNote(noteIdFromRoute).subscribe((data: object[]) => {
      this.note = data[0];
      this.userId = this.note['userId'];
      this.currentContent = this.note['content'];
      console.log(data);
      console.log(this.note);
    });
  }

  updateNote = () => {
    this.apiService.updateNoteForUser(this.userId, this.noteId, this.newContent).subscribe((result: any) => {
      let error = result.error;

      if (error) {
        console.log(`Error: ${error}`);
      } else {
        this.newContent = "";
        this.apiService.getNote(this.noteId).subscribe((data: object[]) => {
          this.note = data[0];
          this.currentContent = this.note['content'];
        });
      }
    });
  };

}
