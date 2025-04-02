import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaPageRoutingModule } from './agenda-routing.module';

import { AgendaPage } from './agenda.page';
import { ComponentsModule } from 'src/app/components/components.module';
import pt from '@angular/common/locales/pt';

registerLocaleData(pt);


@NgModule({
  providers: [{ provide: LOCALE_ID, useValue: 'pt-PT' }],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AgendaPage]
})
export class AgendaPageModule { }
