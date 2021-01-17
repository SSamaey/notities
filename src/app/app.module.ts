import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule} from '@angular/common/http';
import { NotesComponent } from './notes/notes.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NotesComponent,
    UsersComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: UsersComponent },
      { path: 'notes/:userId', component: NotesComponent }
    ]),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
