import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Service/authentication.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormsModule,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss'],
})
export class ResetpasswordComponent implements OnInit {
  myform: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.myform = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
    });
  }
  resetPassword(value) {
    this.authService.resetPassword(this.myform.value.email).then(async () => {
      alert('Email has beent sent .Check your email');
      // const alert = await this.alertCtrl.create({
      //   subHeader: 'Email has been sent!',
      //   message: 'Please check your Email.',
      //   buttons: [{text: 'Ok', role: 'Cancel', handler: () => {
      this.router.navigate(['/login']);
      //   }, }, ],

      // });
      // await alert.present();
    });
  }
}
