import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poi-info',
  templateUrl: './poi-info.component.html',
  styleUrls: ['./poi-info.component.scss'],
  standalone: false,
})
export class PoiInfoComponent implements OnInit {
  data: any;
  title: string = 'Pontos de Interesse Info';
  constructor() { }

  ngOnInit() {
    this.title = this.data.nome;
  }

}
