import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() appComponent: AppComponent;

  users: object[];
  user: object;
  userName: string;
  userId: string;
  notes: object;
  newContent: string;


  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    const userIdFromRoute = this.route.snapshot.paramMap.get('userId');
    this.userId = userIdFromRoute;

    this.apiService.getUsers().subscribe((data: object[]) => {
      this.users = data;
      console.log(this.users);
      this.user = this.users.find(user => {
          return user['id'] == userIdFromRoute;
      });
      console.log(this.user);
      this.userName = this.user['name'];
      
    });

    this.apiService.getNotesForUser(userIdFromRoute).subscribe((data: object[]) => {
      this.notes = data;
      console.log(this.notes);
    })
  }
 
  addNote = () => {
    this.apiService.addNoteForUser(this.userId, this.newContent).subscribe((result: any) => {
      let error = result.error;

      if (error) {
        console.log(`Error: ${error}`);
      } else {
        this.newContent = "";
        this.apiService.getNotesForUser(this.userId).subscribe((data: object[]) => {
          this.notes = data;
        });
      }
    });
  };


}
