import { Component, Input, SimpleChange } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //email: string;
  // courses: [];
  // email = 'teest@gmail.com';
  // password = 'Test@123';

  @Input() loggedIn: boolean;
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {}

  ngOnit() {
    //this.email = localStorage.getItem('email');

    let userDetail = localStorage.getItem('uid');
    console.log('userDetails are : ' + userDetail);
  }

  ngOnChanges(changes: SimpleChange): void {
    console.log(changes);
  }
}
