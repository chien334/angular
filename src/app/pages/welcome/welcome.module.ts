import { NgModule } from '@angular/core';


import { WelcomeComponent } from './welcome.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NzCardModule],
  declarations: [
    WelcomeComponent
  ],
  exports: [
    RouterModule,
  ]
})
export class WelcomeModule { }
