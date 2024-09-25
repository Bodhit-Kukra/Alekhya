import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FooterComponent, HeaderComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  inValidForm: boolean = false;

  isInvalidForm(val: FormGroup) {
    if (val.controls['email'].errors || val.controls['password'].errors) {
      this.inValidForm = true;
    }
  }

  onLogin() {
    this.isInvalidForm(this.loginForm);
    if (!this.isInvalidForm) {
      alert("Login Successful");
    }
    else {
      alert("Please fill all the fields in the correct format.");
    }
  }

}
