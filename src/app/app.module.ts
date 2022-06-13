import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { WithdrawalInfoComponent } from './withdrawal-info/withdrawal-info.component';
import { TopAppBarComponent } from './top-app-bar/top-app-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeComponent,
    WithdrawalInfoComponent,
    TopAppBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
