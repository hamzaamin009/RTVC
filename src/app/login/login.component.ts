import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthenticationService } from '../Service/authentication.service';
import { Router } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userinfo: string;

  // loggedIn: boolean = false;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {}

  errorMessage = '';
  // tslint:disable-next-line: variable-name
  validations_form: FormGroup;
  // tslint:disable-next-line: variable-name
  validation_messages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' },
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      {
        type: 'minlength',
        message: 'Password must be at least 5 characters long.',
      },
    ],
  };

  ngOnInit() {
    this.userinfo = localStorage.getItem('email');
    if (this.userinfo != null) {
      this.router.navigate(['']);
    }

    this.validations_form = this.formBuilder.group({
      email: new FormControl(
        '',

        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          // Validators.minLength(5),
          Validators.required,
        ])
      ),
    });
  }

  async loginUser(value) {
    this.validations_form.reset();
    this.authService.loginUser(value).then(
      (res) => {
        // this.authService.getUserIDAsync().then((user) => {
        // this.afs
        //   .collection('users', (ref) => ref.where('email', '==', user.email))
        //   .valueChanges()
        //   .subscribe((users) => {
        // tslint:disable-next-line: no-shadowed-variable
        // const userinfo: any = users[0];
        // if (userinfo.type === 'admin') {
        this.router.navigate(['/']);
        // this.loggedIn = true;
        // } else if (userinfo.type === 'User') {
        //   this.router.navigate['/home'];
        // } else {
        //   this.router.navigate['/home'];
        // }
        //});
        // });
        this.errorMessage = '';
        // this.navCtrl.navigateForward('/main');
      },
      (err) => {
        this.errorMessage = err.message;
        setTimeout(() => {
          this.errorMessage = '';
        }, 4000);
      }
    );
  }
  //  goToRegisterPage() {
  //    this.navCtrl.navigateForward('/registration');
  //  }
  //  gotoforgotpasswordPage() {
  //    this.navCtrl.navigateForward('/forgot-password');
  //  }
}
