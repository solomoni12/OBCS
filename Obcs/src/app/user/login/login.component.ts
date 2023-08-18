import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  imageUrl = 'assets/obcs.png';
  isScrolled = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // You can adjust the value based on your design
    this.isScrolled = window.scrollY > 100; // Change to true when scrolled down by 100px
  }
  constructor(
    private formBuilder: FormBuilder, // Use FormBuilder instead of UntypedFormBuilder
    private service: AuthService,
    private router: Router,
  ) {

  }
  userdata: any;
  token: any;
  errorMessage: string = '';
  loginform = this.formBuilder.group({
    email: this.formBuilder.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.formBuilder.control('', Validators.required),
  });

  proceedlogin() {
    console.log(this.loginform.valid)
    if (this.loginform.valid) {
      this.service.signin(this.loginform.value).subscribe(
        (result) => {
          this.userdata = result.data.user;

          if (this.userdata) {
            this.token = result.data.token;
            console.log(this.token);
            localStorage.setItem('token', this.token);

            sessionStorage.setItem('token', this.token);
            sessionStorage.setItem('userrole', this.userdata.role);
            sessionStorage.setItem('firstname', this.userdata.fname);
            sessionStorage.setItem('lastname', this.userdata.lname);
            sessionStorage.setItem('email', this.userdata.email);
            sessionStorage.setItem('sex', this.userdata.sex);
            sessionStorage.setItem('phone_number', this.userdata.phone_number);
            sessionStorage.setItem('physical_address', this.userdata.physical_address);
            
            this.router.navigate(['/']);
          } else {
            // alertifyjs.error('You are not active. Please contact admin via mwalupani@gmail.com');
            this.loginform.reset();
          }
        },
        (error) => {
          console.log(error);
          // alertifyjs.error('Invalid username or password. Please try again!');
        }
      );
    } else {
      // alertifyjs.error('Invalid username or password. Please try again!');
    }
  }

  ngOnInit(): void {
  }

}
