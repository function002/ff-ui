import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: '***', component: HeaderComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
