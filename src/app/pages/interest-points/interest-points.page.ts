import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PoiInfoComponent } from 'src/app/components/modals/poi-info/poi-info.component';
import { pointsOfInterestDatasource } from 'src/app/data/pointsOfInterestDatasource';

@Component({
  selector: 'app-interest-points',
  templateUrl: './interest-points.page.html',
  styleUrls: ['./interest-points.page.scss'],
  standalone: false,
})
export class InterestPointsPage implements OnInit {
  title: string = 'Pontos de Interesse';

  interestPoints: any[] = pointsOfInterestDatasource;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }
  async openModal(data: any) {
    const modal = await this.modalCtrl.create({
      component: PoiInfoComponent,
      focusTrap: false,
      cssClass: 'fullscreenModal',
      backdropDismiss: true,
      componentProps: {
        data: data,
      }
    });
    modal.present();
  }
  goToCMVC() {
    window.open('https://www.cm-viana-castelo.pt/', '_blank');
  }

}
