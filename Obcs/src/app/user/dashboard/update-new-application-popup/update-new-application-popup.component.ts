import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import * as alertifyjs from 'alertifyjs';

@Component({
  selector: 'app-update-new-application-popup',
  templateUrl: './update-new-application-popup.component.html',
  styleUrls: ['./update-new-application-popup.component.css']
})
export class UpdateNewApplicationPopupComponent implements OnInit {

  updateForm!: FormGroup;
  statuslist = ['verified','rejected'];
  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialog: MatDialogRef<UpdateNewApplicationPopupComponent>
  ) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      full_name: '',
      name_of_mother: '',
      name_of_father: '',
      remark: '',
      status: '',
      place_of_birth: '',
      mbno: '',
      applicationId: '',
      postal_address: '',
      permanent_address: '',
      date_of_birth: '',
      email: '',
      gender: 'male'
    });
    console.log(this.editData);

    if (this.editData) {
      this.updateForm.patchValue(this.editData);
    }
  }

  Updatefarm() {
    if (this.updateForm.valid) {
      this.service.updatApplication(this.updateForm.value, this.editData.applicationId)
        .subscribe({
          next: (res) => {
            this.updateForm.reset();
            this.dialog.close('update');
            this.router.navigate(['/all_application']);
          },
          error: () => {
            alertifyjs.error('Failed to update');
          }
        });
    } else {
      alertifyjs.error('Form is invalid');
    }
  }
}
