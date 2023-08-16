import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  imageUrl = 'assets/obcs.png';
  isScrolled = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // You can adjust the value based on your design
    this.isScrolled = window.scrollY > 100; // Change to true when scrolled down by 100px
  }
  errorMessage:any;
  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router
  ) { }

  registerform = this.formBuilder.group({
    fname: this.formBuilder.control('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+')
    ]),
    lname: this.formBuilder.control('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+')
    ]),
    phone_number: this.formBuilder.control('', [
      Validators.required,
      Validators.pattern('^0[0-9]{9}$')
    ]),
    physical_address: this.formBuilder.control('', Validators.required),
    password: this.formBuilder.control('', Validators.required),
    password_confirmation: this.formBuilder.control('', Validators.required),
    email: this.formBuilder.control('', [
      Validators.required,
      Validators.email
    ]),
    sex: this.formBuilder.control('male', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+')
    ]),
    role: this.formBuilder.control(0),
    isactive: this.formBuilder.control(1),
  });

  proceedregistration() {
    console.log(this.registerform.value);
    if (this.registerform.valid) {
      const password = this.registerform.get('password')?.value;
      const confirmPassword = this.registerform.get('password_confirmation')?.value;

      if (password === confirmPassword) {
        this.service.register(this.registerform.value).subscribe(
          res => {

            // alertifyjs.success('User registered successfully');
            this.registerform.reset();
            this.router.navigate(['/']);
          },
          error => {

            this.errorMessage = error.error.message;
            // alertifyjs.error(this.errorMessage);
          }
        );
      } else {
        // alertifyjs.error('Password and Confirm Password do not match');
      }
    } else {
      // alertifyjs.error('Invalid data');
    }
  }


  ngOnInit(): void {
  }

}
