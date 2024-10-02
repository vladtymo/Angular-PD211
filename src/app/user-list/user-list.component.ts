import { Component, Input } from '@angular/core';
import { IUser } from '../user';
import { UsersService } from '../services/users.service';
import { UserFormComponent } from "../user-form/user-form.component";
import { UserCardComponent } from "../user-card/user-card.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserFormComponent, UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  users: IUser[] = [];

  constructor(private usersService: UsersService) {
    usersService.getAll().subscribe((data) =>
      this.users = data
    );
  }

  clear() {
    this.users = [];
  }
  delete(id: number) {
    let index = this.users.findIndex(x => x.id === id);
    this.users.splice(index, 1);
  }
  create(user: IUser) {
    this.users.push(user);
  }
}
