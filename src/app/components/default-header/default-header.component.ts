import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss'],
  standalone: false,
})
export class DefaultHeaderComponent implements OnInit {
  @Input() title: string = '';

  constructor(
    private utilService: UtilsService,
  ) { }

  ngOnInit() { }

  toggleMenu() {
    this.utilService.toggleMenu();
  }

}
