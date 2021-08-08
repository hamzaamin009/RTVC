import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewsComponent } from './news/news.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SignupComponent } from './signup/signup.component';
import { TeamrankingComponent } from './teamranking/teamranking.component';
import { CommentryComponent } from './commentry/commentry.component';
import { UpcomingmatchesComponent } from './upcomingmatches/upcomingmatches.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'teamranking', component: TeamrankingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login/resetpassword', component: ResetpasswordComponent },
  { path: 'commentry', component: CommentryComponent },
  { path: 'upcomingmatches', component: UpcomingmatchesComponent },
  { path: 'admin', component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
