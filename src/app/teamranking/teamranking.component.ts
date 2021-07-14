import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from '../Service/authentication.service';

@Component({
  selector: 'app-teamranking',
  templateUrl: './teamranking.component.html',
  styleUrls: ['./teamranking.component.scss'],
})
export class TeamrankingComponent implements OnInit {
  userDetail: any;
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.userDetail = localStorage.getItem('uid');
    if (this.userDetail === null) {
      // console.log('oho null');
      // this.router.navigate(['']);
      // this.authService.logoutUser();
      this.logout();
    }
  }

  logout() {
    this.userDetail = '';
    this.router.navigate(['']);
    this.authService.logoutUser();
  }
}
