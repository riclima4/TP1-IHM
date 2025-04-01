import { Component, OnInit } from '@angular/core';
import { executiveDatasource } from 'src/app/data/executiveDatasource';

@Component({
  selector: 'app-executive',
  templateUrl: './executive.page.html',
  styleUrls: ['./executive.page.scss'],
  standalone: false,
})
export class ExecutivePage implements OnInit {
  title: string = 'Executivo';
  executives: any[] = executiveDatasource;
  constructor() { }

  ngOnInit() {
  }
  goToExecutiveCMVC() {
    window.open('https://www.cm-viana-castelo.pt/municipio/camara-municipal/executivo/', '_blank');
  }

}
