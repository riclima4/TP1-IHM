import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-executive',
  templateUrl: './executive.page.html',
  styleUrls: ['./executive.page.scss'],
  standalone: false,
})
export class ExecutivePage implements OnInit {
  title: string = 'Executivo';

  constructor() { }

  ngOnInit() {
  }

}
