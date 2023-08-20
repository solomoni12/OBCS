import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.css']
})
export class AddDetailComponent implements OnInit {

  errorMessage:any;
  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router
  ) { }

  registerform = this.formBuilder.group({
    full_name: this.formBuilder.control('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]+')  // Added space character in the pattern
    ]),
    name_of_mother: this.formBuilder.control('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]+')  // Added space character in the pattern
    ]),
    name_of_father: this.formBuilder.control('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]+')  // Added space character in the pattern
    ]),
    place_of_birth: this.formBuilder.control('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]+')  // Added space character in the pattern
    ]),    
    
    mbno: this.formBuilder.control('', [
      Validators.required,
      Validators.pattern('^0[0-9]{9}$')
    ]),
    postal_address: this.formBuilder.control('', Validators.required),
    permanent_address: this.formBuilder.control('', Validators.required),
    date_of_birth:this.formBuilder.control('', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]),
    email: this.formBuilder.control('', [
      Validators.required,
      Validators.email
    ]),
    gender: this.formBuilder.control('male', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+')
    ]),
  });

  proceedregistration() {
    console.log(this.registerform.value);
    if (this.registerform.valid) {


      
        this.service.registerApplication(this.registerform.value).subscribe(
          res => {

            // alertifyjs.success('User registered successfully');
            this.registerform.reset();
            this.router.navigate(['/manage_detail']);
          },
          error => {
            console.log(error);
            this.errorMessage = error.error.message;
            // alertifyjs.error(this.errorMessage);
          }
        );
      } else {
        // alertifyjs.error('Password and Confirm Password do not match');
      }
    
  }


  ngOnInit(): void {
  }

}
