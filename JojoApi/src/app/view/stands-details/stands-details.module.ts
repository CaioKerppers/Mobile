import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StandsDetailsPageRoutingModule } from './stands-details-routing.module';

import { StandsDetailsPage } from './stands-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StandsDetailsPageRoutingModule
  ],
  declarations: [StandsDetailsPage]
})
export class StandsDetailsPageModule {}
