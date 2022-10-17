import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TenComponent} from '../app/ten/ten.component'
import { SymbolComponent } from './symbol/symbol.component';

const routes: Routes = [
{path:'ten/:symbol', component:TenComponent},
{path:'', component:SymbolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
