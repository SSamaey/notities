import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule} from '@angular/common/http';
import { NotesComponent } from './notes/notes.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NotesComponent,
    NoteFormComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: UsersComponent },
      { path: 'notes/:userId', component: NotesComponent },
      { path: 'noteForm/:noteId', component: NoteFormComponent }
    ]),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
