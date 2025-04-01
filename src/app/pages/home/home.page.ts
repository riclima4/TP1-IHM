import { Component, OnInit } from '@angular/core';

import { pointsOfInterestDatasource } from 'src/app/data/pointsOfInterestDatasource';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  title: string = 'Início';

  pointsOfInterestData: any[] = pointsOfInterestDatasource;

  constructor(

  ) { }

  ngOnInit() {
  }

  goToLendasPDF() {
    window.open('https://www.cm-viana-castelo.pt/wp-content/uploads/2022/11/lendas_de_viana_do_castelo.pdf', '_blank');
  }
}
