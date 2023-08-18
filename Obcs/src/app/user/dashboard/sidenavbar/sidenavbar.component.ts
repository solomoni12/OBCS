import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit, DoCheck {
  isuser=false;
  isadminuser=false;

  imageUrl = 'assets/Untitled-11.jpg';
  constructor( private router: Router, private service:AuthService) { }

  ngDoCheck(): void{
    if(this.service.GetUserrole() === '0'){
      this.isuser = true;
    }else{
      this.isadminuser = true;
  
    }
  }
  useremail:any;
  userfirstname:any;
  userlastname:any;
  mbno:any;

  ngOnInit(): void {
    this.useremail = this.service.GetUserEmail();
    this.userfirstname = this.service.GetUserFirstName();
    this.userlastname = this.service.GetUsrLastName();
    this.mbno = this.service.GetUserPhone();
    console.log(this.useremail);
  }
  logout(){
    this.service.logout().subscribe({
      next:(res)=>{
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      error:()=>{
        // console.log(error);
        // alertifyjs.error('Failed to logout. Please try again');
      }
    })
  }
}
