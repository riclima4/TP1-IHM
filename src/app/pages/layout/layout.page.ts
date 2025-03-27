import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
  standalone: false,
})
export class LayoutPage implements OnInit {
  resizeObserver: ResizeObserver | undefined;
  closedMenu: any = null;
  isMobile: any = null;
  panelWidth: number = 0;
  tolerance: number = 2;

  constructor(
    private cdr: ChangeDetectorRef,
    private utilsService: UtilsService,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    const menu = document.querySelector('ion-split-pane ion-menu');
    if (menu) {
      this.resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          this.panelWidth = Math.ceil(entry.contentRect.width) + 1;

          if (this.isWithinRange(this.panelWidth, 80, this.tolerance)) {
            this.closedMenu = true;
            this.isMobile = false;
          } else if (this.isWithinRange(this.panelWidth, window.innerWidth + 1, this.tolerance) || this.isWithinRange(this.panelWidth, 1, this.tolerance)) {
            this.closedMenu = false;
            this.isMobile = true;
          } else {
            this.closedMenu = false;
            this.isMobile = false;
          }
          this.cdr.detectChanges();
        }
      });

      this.resizeObserver.observe(menu);
    }
  }
  private isWithinRange(value: number, target: number, tolerance: number): boolean {
    return Math.abs(value - target) <= tolerance;
  }

  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  toggleMenu() {
    this.utilsService.toggleMenu();
  }


}
