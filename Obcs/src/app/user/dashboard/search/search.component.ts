import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import * as alertifyjs from 'alertifyjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



  constructor(
    private formBuilder: FormBuilder, 
    private service: AuthService,
    private router: Router,
  ) {

  }
  userdata: any;
  token: any;
  errorMessage: string = '';
  findform = this.formBuilder.group({
    applicationId: this.formBuilder.control(''),
  });

  proceedfind() {
    console.log(this.findform.valid)
    if (this.findform.valid) {
      this.service.getApplicationByApplicationId(this.findform.value.applicationId).subscribe(
        (result) => {
          this.userdata = result.data.applications[0];
          console.log(this.userdata.id);
          this.router.navigate(['/view_user_application_search'], { queryParams: { id: this.userdata.id } });
          
        },
        (error) => {
          alertifyjs.error('Invalid ApplicationID. Please try again!');
        }
      );
    } else {
      alertifyjs.error('Invalid ApplicationID. Please try again!');
    }
  }

  ngOnInit(): void {
  }
}
