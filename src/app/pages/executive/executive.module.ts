import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExecutivePageRoutingModule } from './executive-routing.module';

import { ExecutivePage } from './executive.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExecutivePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ExecutivePage]
})
export class ExecutivePageModule { }
