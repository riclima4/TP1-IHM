import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { SwupdaterService } from './services/utils/updates/swupdater.service';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private sw: SwupdaterService
  ) { }

  async ngOnInit() {
    await this.initializeApplication();
  }

  async initializeApplication() {
    await this.platform.ready();
    this.sw.checkForUpdates();
  }
}
