import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent} from './error/error.component';
import {HomeComponent} from './home/home.component';
import {RulesComponent} from './rules/rules.component';
import {PaymentComponent} from './payment/payment.component';
import {RegisterComponent} from './register/register.component';
import {CsgoComponent} from './register/csgo/csgo.component';
import {R6Component} from './register/r6/r6.component';
import { PaytmComponent} from './payment/paytm/paytm.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
    {path: 'rules', component:RulesComponent},
    {path: 'pay', component:PaymentComponent},
    {path: 'pay/paytm' ,component:PaytmComponent},
    {path: 'register', component:RegisterComponent , children: [
      {path: 'csgo' ,component:CsgoComponent},
      {path: 'r6' , component:R6Component},
    ]},
    {path: '', redirectTo: 'home' , pathMatch: 'full'},
    {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
