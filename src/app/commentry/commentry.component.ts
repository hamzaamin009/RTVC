import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-commentry',
  templateUrl: './commentry.component.html',
  styleUrls: ['./commentry.component.scss'],
})
export class CommentryComponent implements OnInit {
  Match: any;
  myDate: any;

  matchCommentry;
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.afs
      .collection('Matches')
      .snapshotChanges()
      .subscribe((matchCommentry) => {
        // this.Match = Matches;
        // this.myDate = this.Match[1].Date.toDate();
        // console.log(this.Match);
        this.matchCommentry = matchCommentry.map((commentry) => {
          const commentryData = commentry.payload.doc.data();
          console.log(commentryData);
          return commentryData;
        });
      });
  }
}
