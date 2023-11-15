import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandsPage } from './stands.page';

const routes: Routes = [
  {
    path: '',
    component: StandsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StandsPageRoutingModule {}
