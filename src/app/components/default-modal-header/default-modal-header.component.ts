import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-default-modal-header',
  templateUrl: './default-modal-header.component.html',
  styleUrls: ['./default-modal-header.component.scss'],
  standalone: false,
})
export class DefaultModalHeaderComponent implements OnInit {
  @Input() title: string = 'Titulo Default'

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() { }
  async closeModal() {
    await this.modalCtrl.dismiss(null, 'cancel');
  }

}
