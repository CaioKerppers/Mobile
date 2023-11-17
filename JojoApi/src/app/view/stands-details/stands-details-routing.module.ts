import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandsDetailsPage } from './stands-details.page';

const routes: Routes = [
  {
    path: '',
    component: StandsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StandsDetailsPageRoutingModule {}
