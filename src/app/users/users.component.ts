import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title = 'notities';
  users: string[];
  newName: string = "";

  constructor(private apiService: ApiService) {}

  ngOnInit() {
   
    this.apiService.getUsers().subscribe((data: string[]) => {
      console.log(data);
      this.users = data;
      console.log(this.users);
    });
    console.log(this.users);
  }

  addUser = () => {
    this.apiService.addUser(this.newName).subscribe((result: any) => {
      let error = result.error;

      if (error) {
        console.log(`Error: ${error}`);
      } else {
        this.newName = "";
        this.apiService.getUsers().subscribe((data: string[]) => {
          this.users = data;
        });
      }
    });
  };

  deleteUser = (userId: string) => {
    this.apiService.deleteUser(userId).subscribe((result: any) => {
      console.log(result);
      let error = result.error;

      if (error) {
        console.log(`Error: ${error}`);
      } else {
      this.apiService.getUsers().subscribe((data: string[]) => {
        this.users = data;
      });
    }
    });
  };

}
