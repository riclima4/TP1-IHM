import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutPage } from './layout.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',

  },
  {
    path: '',
    component: LayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../tabs/tabs.module').then(m => m.TabsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule { }
