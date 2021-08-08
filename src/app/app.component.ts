import { Component, Input, SimpleChange } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userDetail: any
  @Input() loggedIn: boolean;
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {}

  ngOnit() {
    
    this.userDetail = localStorage.getItem('userDetail');
    console.log('userDetails are : ' + this.userDetail);
  }

  ngOnChanges(changes: SimpleChange): void {
    console.log(changes);
  }
}
