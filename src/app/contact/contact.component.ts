import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)])
  });

  invalidForm: boolean = false;
  
  isInvalidForm(val: FormGroup) {
    if((val.controls['name'].errors) || (val.controls['email'].errors) || (val.controls['number'].errors) || (val.controls['message'].errors)) {
      this.invalidForm = true;
    }
  }

  onContact() {
    console.log(this.contactForm.value);
    this.isInvalidForm(this.contactForm);
    if(!(this.invalidForm)) {
      alert("Your response has been submitted. We will contact you shortly.");
    }
    else {
    alert("Please fill all the fields in the correct format.");
    }
  }

}
