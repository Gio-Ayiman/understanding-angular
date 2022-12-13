import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentInteractionRoutingModule } from './component-interaction-routing.module';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';


@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    ComponentInteractionRoutingModule
  ],
  exports: [
    ChildComponent,
    ParentComponent
  ]
})
export class ComponentInteractionModule { }
