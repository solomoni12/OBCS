import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  isScrolled = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // You can adjust the value based on your design
    this.isScrolled = window.scrollY > 100; // Change to true when scrolled down by 100px
  }
  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router,
  ) {

  }

  token: any;
  errorMessage: string = '';

  loginform = this.formBuilder.group({
    email: this.formBuilder.control('', Validators.compose([Validators.required, Validators.email]))
  });

  proceedsubmit() {
    if (this.loginform.valid) {
      this.service.forgotPassword(this.loginform.value).subscribe(
        (result) => {
          this.token = result.data;
          console.log(this.token.token);
          // alertifyjs.success(this.token.message);
          this.router.navigate(['/reset-password'], { queryParams: { token: this.token.token } });
        },
        (error) => {
          this.errorMessage = error.error.message;
          console.log(this.errorMessage);
          // alertifyjs.error(this.errorMessage);
        }
      );
    } else {
      // alertifyjs.error('Failed. Please try again!');
    }
  }
  

  ngOnInit(): void {
  }


}
