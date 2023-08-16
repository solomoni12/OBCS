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
    // You can adjust the value based on your design
    this.isScrolled = window.scrollY > 100; // Change to true when scrolled down by 100px
  }
  constructor() { }

  ngOnInit(): void {
  }

}
