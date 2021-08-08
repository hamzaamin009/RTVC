import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Service/authentication.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  userDetail: any;
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.userDetail = localStorage.getItem('userDetail');
    if (this.userDetail === null) {
      
      this.logout();
    }
  }

  logout() {
    this.userDetail = '';
    this.router.navigate(['']);
    this.authService.logoutUser();
  }
}
