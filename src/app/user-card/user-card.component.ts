import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input()
  user = {
    id: 1001,
    name: "Nazar",
    email: "tymo@ukr.net",
    role: "Admin"
  }
}
