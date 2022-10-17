import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TenComponent} from '../app/ten/ten.component'

const routes: Routes = [
{path:'ten', component:TenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
