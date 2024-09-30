import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../user';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  userForm;

  @Output()
  onCreate = new EventEmitter<IUser>();

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [''],
      role: [''],
      birthdate: [new Date()]
    });

    // userForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl('')
    // });
  }

  onSubmit() {
    if (!this.userForm.valid) {
      alert("Invalid data.")
      return;
    }

    // витягнути дані з форми
    let user = this.userForm.value as IUser;

    console.log(user);
    this.onCreate.emit(user);
  }
}
