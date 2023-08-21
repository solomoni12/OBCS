import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import * as alertifyjs from 'alertifyjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any;
  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {}

  
  updateForm = this.formBuilder.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    address: ['', Validators.required],
    mbno: ['', Validators.required],
    email: [{ value: '', disabled: true }]
  });


  ngOnInit(): void {
    this.fetchUserProfile();
  }

  fetchUserProfile() {
    this.service.loggedUser().subscribe(
      (response) => {
        if (response.status === 1 && response.data && response.data.user) {
          this.user = response.data.user;
          this.populateForm();
        } else {
          alertifyjs.error('Failed to fetch user profile. Please try again.');
        }
      },
      (error) => {
        alertifyjs.error('Failed to fetch user profile. Please try again.');
      }
    );
  }

  populateForm() {
    this.updateForm.patchValue({
      fname: this.user.fname,
      lname: this.user.lname,
      address: this.user.address,
      mbno: this.user.mbno,
      email: this.user.email
    });
  }

  updateProfile() {
    if (this.updateForm.valid) {
      const updatedData = {
        fname: this.updateForm.value.fname,
        lname: this.updateForm.value.lname,
        address: this.updateForm.value.address,
        mbno: this.updateForm.value.mbno
      };

      this.service.UpdateUser(updatedData, this.user.id).subscribe(
        (response) => {
          console.log(response);
          this.updateForm.reset();
          this.router.navigate(['/']); // Navigate to home page
          alertifyjs.success('User profile updated successfully!');
        },
        (error) => {
          alertifyjs.error('Failed to update user profile. Please try again.');
        }
      );
    } else {
      alertifyjs.error('Invalid form data. Please fill all the required fields.');
    }
  }


}
