import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UsersComponent } from './components/users/users.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    NavBarComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'users/:username', component: GithubProfileComponent },
      { path: 'users', component: UsersComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
