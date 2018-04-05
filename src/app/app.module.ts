import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { environment } from '../environments/environment';

import { AService } from './services/a.service';
import { LoginInFormComponent } from './components/login-in-form/login-in-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserFormComponent,
    LoginInFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase,'a'),
    AngularFirestoreModule
  ],
  providers: [AService],
  bootstrap: [AppComponent]
})
export class AppModule { }
