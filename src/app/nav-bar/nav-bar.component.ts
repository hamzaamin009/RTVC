import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { AuthenticationService } from '../Service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  // @Input() loggedIn: boolean = false;

  userDetail: any;
  // email;

  constructor(
    public router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.userDetail = localStorage.getItem('userDetail');
    
    if (this.userDetail === null) {
      this.logout();
    } else {
      this.userDetail = JSON.parse(this.userDetail)
      console.log(this.userDetail.type)
    }
  }

  ngOnChanges(changes: SimpleChange): void {
    console.log(changes);
    // debugger;
  }

  logout() {
    this.userDetail = '';
    this.authService.logoutUser();
  }
}
