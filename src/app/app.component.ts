import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from "./user-card/user-card.component";
import { IUser, USERS } from './user';
import { UserFormComponent } from "./user-form/user-form.component";
import { HttpClient } from '@angular/common/http';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent, UserFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-PD211';
  name = "Vlad Tymoshchuk"

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
  changeName() {
    this.name += '!';
  }
  create(user: IUser) {
    this.users.push(user);
  }
}
