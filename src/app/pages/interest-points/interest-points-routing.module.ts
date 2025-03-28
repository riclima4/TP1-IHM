import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterestPointsPage } from './interest-points.page';

const routes: Routes = [
  {
    path: '',
    component: InterestPointsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterestPointsPageRoutingModule {}
