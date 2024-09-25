import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, FooterComponent, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
  });

  invalidForm: boolean = false;

  isInvalidForm(val: FormGroup) {
    if ((val.controls['name'].errors) || (val.controls['email'].errors) || (val.controls['password'].errors) || (val.controls['confirmPassword'].errors || val.controls['address'].errors || val.controls['phone'].errors)) {
      this.invalidForm = true;
    }
  }

  onRegister() {
    console.log(this.registerForm.value);
    this.isInvalidForm(this.registerForm);
    if (!(this.invalidForm)) {
      alert("You have been successfully registered !");
    }
    else {
      alert("Please fill all the fields in the correct format.");
    }
  }
}
