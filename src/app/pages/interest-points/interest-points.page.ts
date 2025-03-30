import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest-points',
  templateUrl: './interest-points.page.html',
  styleUrls: ['./interest-points.page.scss'],
  standalone: false,
})
export class InterestPointsPage implements OnInit {
  title: string = 'Pontos de Interesse';

  constructor() { }

  ngOnInit() {
  }

}
