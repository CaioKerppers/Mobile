import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StandsPageRoutingModule } from './stands-routing.module';

import { StandsPage } from './stands.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StandsPageRoutingModule
  ],
  declarations: [StandsPage]
})
export class StandsPageModule {}
