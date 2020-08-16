import { NgModule } from '@angular/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { Routes, RouterModule } from '@angular/router';
import { MonitorComponent } from './monitor.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

const routes: Routes = [
  { path: '', component: MonitorComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzCarouselModule ,
    NzDropDownModule
  ],
  declarations: [
    MonitorComponent,
  ],
  exports: [
    RouterModule
  ]
})
export class MonitorModule { }
