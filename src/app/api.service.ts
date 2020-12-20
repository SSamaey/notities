import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers = () => {
    //return ['A', 'B', 'C'];
    return this.http.get('https://apple-glacier-result.glitch.me/users');
  }

  addUser = (name: string) => {
    let data = { 'name': name };
    return this.http.post('https://apple-glacier-result.glitch.me/users', data);
  }

  deleteUser = (userId: string) => {
    // Delete parameters meegeven onder 'options' > 'params'

    return this.http.delete(
      'https://apple-glacier-result.glitch.me/users/'+ userId);
  }

  getNotesForUser = (userId: string) => {

    return this.http.get('https://apple-glacier-result.glitch.me/users/'+ userId +'/notes');
  }

  addNoteForUser = (userId: string, content: string) => {
    let data = { 'content': content };
    return this.http.post('https://apple-glacier-result.glitch.me/users/'+ userId +'/notes', data);
  }

  updateNoteForUser = (userId: string, noteId: string, content: string) => {
    let data = { 'content': content };
    return this.http.patch('https://apple-glacier-result.glitch.me/users/'+ userId +'/notes/'+ noteId, data);
  }

  getNote = (noteId: string) => {

    return this.http.get('https://apple-glacier-result.glitch.me/users/notes/'+ noteId);
  }

  deleteNoteForUser = (userId: string, noteId: string) => {
    return this.http.delete('https://apple-glacier-result.glitch.me/users/'+ userId +'/notes/'+ noteId);
  }

}


