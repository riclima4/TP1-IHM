import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgendaInfoComponent } from 'src/app/components/modals/agenda-info/agenda-info.component';
import { agendaDatasource } from 'src/app/data/agendaDatasource';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
  standalone: false,
})
export class AgendaPage implements OnInit {
  title: string = 'Agenda';

  agendaData: any[] = agendaDatasource;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  goToCMVC() {
    window.open('https://www.cm-viana-castelo.pt/', '_blank');
  }

  async openModal(data: any) {
    const modal = await this.modalCtrl.create({
      component: AgendaInfoComponent,
      focusTrap: false,
      cssClass: 'fullscreenModal',
      backdropDismiss: true,
      componentProps: {
        data: data,
      }
    });
    modal.present();
  }
}
