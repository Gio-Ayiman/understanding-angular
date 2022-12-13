import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ViewEncapsulationModule } from '../feature/view-encapsulation/view-encapsulation.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    FormsModule,
    ViewEncapsulationModule
  ]
})
export class SharedModule { }
