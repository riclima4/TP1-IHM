import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
  standalone: false,
})
export class ProjectInfoComponent implements OnInit {
  title: string = 'Sobre o Projeto';

  constructor() { }

  ngOnInit() { }

}
