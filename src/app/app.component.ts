import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from "./user-card/user-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-PD211';
  name = "Vlad Tymoshchuk"

  users = [
    { id: 1001, name: "Nazar", email: "tymo@ukr.net", role: "Admin" },
    { id: 1002, name: "Olga", email: "olga@ukr.net", role: "User" },
    { id: 1003, name: "Vitalii", email: "vit@ukr.net", role: "Manager" },
  ]

  // properties and methods
  changeName() {
    this.name += '!';
  }
}
