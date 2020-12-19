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
  };

  addUser = (name: string) => {
    let data = { 'name': name };
    return this.http.post('https://apple-glacier-result.glitch.me/users', data);

  }

  deleteUser = (name: string) => {
    // Delete parameters meegeven onder 'options' > 'params'
    let options = {
      'params': { 'name': name }
    };
    return this.http.delete(
      'https://apple-glacier-result.glitch.me/users', options
    );

  }

}


