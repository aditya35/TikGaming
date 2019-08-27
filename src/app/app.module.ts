import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent} from './home/home.component';
import { ErrorComponent} from './error/error.component';
import {RulesComponent} from './rules/rules.component';
import {PaymentComponent} from './payment/payment.component';
import {RegisterComponent} from './register/register.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CsgoComponent} from './register/csgo/csgo.component';
import {R6Component} from './register/r6/r6.component';
import { FormsModule } from '@angular/forms';
import {R6RulesComponent} from './rules/r6/r6.component';
import {CsgoRulesComponent} from './rules/csgo/csgo.component'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { PaytmComponent} from './payment/paytm/paytm.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    RulesComponent,
    PaymentComponent,
    RegisterComponent,
    CsgoComponent,
    R6Component,
    R6RulesComponent,
    CsgoRulesComponent,
    PaytmComponent,

  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    MaterialModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireDatabaseModule,
    DeviceDetectorModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
