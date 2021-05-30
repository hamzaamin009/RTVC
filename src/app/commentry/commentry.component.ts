import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Service/authentication.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-commentry',
  templateUrl: './commentry.component.html',
  styleUrls: ['./commentry.component.scss'],
})
export class CommentryComponent implements OnInit {
  Match: any;
  myDate: any;
  constructor(
    private authService: AuthenticationService,

    private afs: AngularFirestore
  ) {}

  ngOnInit() {
    this.afs
      .collection('Matches')
      .valueChanges()
      .subscribe((Matches) => {
        this.Match = Matches;
        this.myDate = this.Match[0].Date.toDate();
        console.log(this.Match);
      });
  }
}
