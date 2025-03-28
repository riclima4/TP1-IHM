import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterestPointsPageRoutingModule } from './interest-points-routing.module';

import { InterestPointsPage } from './interest-points.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterestPointsPageRoutingModule
  ],
  declarations: [InterestPointsPage]
})
export class InterestPointsPageModule {}
