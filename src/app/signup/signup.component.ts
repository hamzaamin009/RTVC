import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthenticationService } from '../Service/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  validations_form: FormGroup;
  errorMessage: '';
  successMessage: string = '';
  validation_messages = {
    ownername: [{ type: 'required', message: 'Name is required.' }],
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' },
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      {
        type: 'minlength',
        message: 'Password must be at least 6 characters long.',
      },
    ],
  };
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      ownername: new FormControl('', Validators.compose([Validators.required])),

      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.minLength(1), Validators.required])
      ),
    });
  }
  async tryRegister(value) {
    this.authService
      .registerUser(value)
      // tslint:disable-next-line: align
      .then(
        (res) => {
          //console.log(res);
          this.errorMessage = '';
          this.successMessage = 'Your account has been created. Please log in.';
          setTimeout(() => {
            this.successMessage = '';
          }, 4000);
        },
        (err) => {
          console.log(err);
          this.errorMessage = err.message;
          this.successMessage = '';
          setTimeout(() => {
            this.errorMessage = '';
          }, 4000);
        }
      );
    // res.present();
    this.validations_form.reset();
    //  });
    //return await loading.onDidDismiss();
  }
}
