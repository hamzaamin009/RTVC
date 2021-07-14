import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { AuthenticationService } from '../Service/authentication.service';

@Component({
  selector: 'app-upcomingmatches',
  templateUrl: './upcomingmatches.component.html',
  styleUrls: ['./upcomingmatches.component.scss'],
})
export class UpcomingmatchesComponent implements OnInit {
  upcomingMatches: any;
  userDetail: any;
  constructor(
    private afs: AngularFirestore,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userDetail = localStorage.getItem('uid');
    // console.log('userDetails are : ' + this.userDetail);
    if (this.userDetail === null) {
      // console.log('oho null');
      // this.router.navigate(['']);
      // this.authService.logoutUser();
      this.logout();
    } else {
      this.afs
        .collection('Upcomingmatches')
        .snapshotChanges()
        .subscribe((upcomingMatchesData) => {
          // console.log(upcomingMatchesData);
          this.upcomingMatches = upcomingMatchesData.map((match) => {
            // console.log(match);
            const id = match.payload.doc.id;
            const data = match.payload.doc.data();
            console.log(data);
            return { id, data };
          });
          // console.log(this.upcomingMatches);
        });
      // console.log(data);
    }
  }

  logout() {
    this.userDetail = '';
    this.router.navigate(['']);
    this.authService.logoutUser();
  }
}
