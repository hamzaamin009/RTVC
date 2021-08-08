import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';
import { Router } from '@angular/router';

import { resolve } from 'url';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // loggedIn: boolean = false;

  constructor(
    public router: Router,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {}

  async getUserIDAsync() {
    const user = await this.afAuth.authState.pipe(first()).toPromise();
    //console.log(user.uid, user.email);
    //debugger;
    return user;
  }

  registerUser(value) {
    const ownername = value.ownername;
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth
        .createUserWithEmailAndPassword(value.email, value.password)
        .then((res) => {
          return this.afs.collection('users').doc(res.user.uid).set({
            email: value.email,
            password: value.password,
            username: ownername,

            type: 'User',
          });
        })
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });
  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      //        console.log(this.afs.collection('users').doc('uid').get(value.type));
      //           debugger;

      //console.log(userInfo);

      this.afAuth.auth
        .signInWithEmailAndPassword(value.email, value.password)
        .then(
          (res) => {
            console.log('res', res);

            resolve(res);

          },
          (err) => reject(err)
        );
    });
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.afAuth.auth.currentUser) {
        this.afAuth.auth
          .signOut()
          .then(() => {
            localStorage.removeItem('userDetail');
            this.router.navigate([''])
          })
          .catch((error) => {
            reject();
          });
      }
    });
  }
  resetPassword(email: string): Promise<void> {
    console.log('reset password');
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }
}
