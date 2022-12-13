import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewEncapsulationRoutingModule } from './view-encapsulation-routing.module';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ViewEncapsulationRoutingModule,
    ViewEncapsulationRoutingModule
  ]
})
export class ViewEncapsulationModule { }
