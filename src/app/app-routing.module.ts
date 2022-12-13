import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'view-encapsulation',
    loadChildren: () => import('./feature/view-encapsulation/view-encapsulation.module').then(m => m.ViewEncapsulationModule)
  },
  {
    path: 'component-interaction',
    loadChildren: () => import('./feature/component-interaction/component-interaction.module').then(m => m.ComponentInteractionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
