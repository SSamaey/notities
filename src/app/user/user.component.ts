import { Component, Input, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


  export class UserComponent {
    @Input() user: any;
    @Output() deleted = new EventEmitter<string>();
    
     onDeleteClick = () => {
       this.deleted.emit(this.user.id);
     }

}
