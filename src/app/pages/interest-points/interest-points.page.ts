import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }
  openModal(data: any) {

  }
  goToCMVC() {
    window.open('https://www.cm-viana-castelo.pt/', '_blank');
  }

}
