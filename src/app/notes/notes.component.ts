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

  users: Object[];
  user: Object;
  userName: String;


  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    const userIdFromRoute = this.route.snapshot.paramMap.get('userId');

    this.apiService.getUsers().subscribe((data: string[]) => {
      console.log(data);
      this.users = data;
      console.log(this.users);
      this.user = this.users.find(user => {
          return user['id'] === userIdFromRoute;
      });
      console.log(this.user);
      //this.userName = this.user['name'];
    });

    


    //this.users = this.appComponent.users;
    //console.log(this.users);
    //this.user = this.users.find(user => {
    //  return user.id === Number(userIdFromRoute);
    //})

    //console.log(this.appComponent.users);
    //this.user = this.users.find(user => {
    //    return user.id === Number(userIdFromRoute);
    //});
    //this.user = this.users.find(user => {
    //      return user.id === Number(userIdFromRoute);
    //});

    //this.route.paramMap.subscribe(params => {
     // this.user = this.users[+params.get('userId')];
    //})
  }

}
