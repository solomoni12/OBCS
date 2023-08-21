import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
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
    private activatedRoute: ActivatedRoute
  ) {
    sessionStorage.clear();
  }

  userdata: any;
  token: any;
  errorMessage: string = ''; // Variable to hold the error message

  resetform = this.formBuilder.group({
    email: this.formBuilder.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.formBuilder.control('', Validators.required),
    token: this.formBuilder.control('', Validators.required) // Add the token field
  });
  

  proceedreset() {
    if (this.resetform.valid) {
      this.service.resetPassword(this.resetform.value).subscribe(
        (result) => {
          this.token = result.data;
          console.log(this.token.message);
          // alertifyjs.success(this.token.message);
          this.router.navigate(['/login']);
        },
        (error) => {
          this.token = error.error;
          console.log(this.token.message);
          // alertifyjs.error(this.token.message);
        }
      );
    } else {
      // alertifyjs.error('Invalid username or password. Please try again!');
    }
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      if (params.has('token')) {
        this.token = params.get('token');
        this.resetform.patchValue({ token: this.token });
      }
    });
  }

}
