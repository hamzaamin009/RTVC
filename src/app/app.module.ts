import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamrankingComponent } from './teamranking/teamranking.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  AngularFirestoreModule,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { CommentryComponent } from './commentry/commentry.component';
import { UpcomingmatchesComponent } from './upcomingmatches/upcomingmatches.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamrankingComponent,
    NewsComponent,
    AboutComponent,
    NavBarComponent,
    SignupComponent,
    LoginComponent,
    ResetpasswordComponent,
    AdminComponent,
    CommentryComponent,
    UpcomingmatchesComponent,
  ],
  imports: [
    BrowserModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}