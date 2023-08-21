import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-sidebar',
  templateUrl: './login-sidebar.component.html',
  styleUrls: ['./login-sidebar.component.css']
})
export class LoginSidebarComponent implements OnInit {

  imageUrl = 'assets/obcs.png';
  isScrolled = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    
    this.isScrolled = window.scrollY > 100; 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
