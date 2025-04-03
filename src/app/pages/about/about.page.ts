import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProjectInfoComponent } from 'src/app/components/modals/project-info/project-info.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: false,
})
export class AboutPage implements OnInit {
  title: string = 'Sobre';


  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

  async openProjectInfo() {
    const modal = await this.modalCtrl.create({
      component: ProjectInfoComponent,
      focusTrap: false,
      cssClass: 'fullscreenModal',
      backdropDismiss: true,
    });
    modal.present();
  }

}
