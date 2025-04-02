import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { DefaultModalHeaderComponent } from './default-modal-header/default-modal-header.component';
import { AgendaInfoComponent } from './modals/agenda-info/agenda-info.component';
import { PoiInfoComponent } from './modals/poi-info/poi-info.component';





const components = [
  DefaultHeaderComponent,
  DefaultModalHeaderComponent,
  AgendaInfoComponent,
  PoiInfoComponent
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,

  ],
  declarations: components,
  exports: components,

})
export class ComponentsModule { }
