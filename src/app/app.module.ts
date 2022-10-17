import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SymbolComponent } from './symbol/symbol.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule}  from '@angular/common/http'
import { StockService } from './stock.service';
import { TenComponent } from './ten/ten.component';

@NgModule({
  declarations: [
    AppComponent,
    SymbolComponent,
    TenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
