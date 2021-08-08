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
