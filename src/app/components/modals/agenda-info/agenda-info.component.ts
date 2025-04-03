import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda-info',
  templateUrl: './agenda-info.component.html',
  styleUrls: ['./agenda-info.component.scss'],
  standalone: false,
})
export class AgendaInfoComponent implements OnInit {
  data: any;
  title: string = 'Agenda Info';

  constructor() { }

  ngOnInit() {
    this.title = this.data.nome;
  }

  openMaps(cords: any) {
    const [latitude, longitude] = cords.split(',');
    window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, '_blank');

  }


}
