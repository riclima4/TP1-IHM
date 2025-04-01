import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: false
})
export class HistoryPage implements OnInit {
  title: string = 'História';
  foto = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2jONik-Pc4iUebyuXs3DDqSlQa1KVkhGrLVZ_d2j60NPc2JGs4fBNiqPsAanhvlS0060EJhoG-LUXw7B8L0lnq4gKGEaQB2vVCoeOZ8mHC52L7pWOLAYR5EqEPdQRPbRzKnYlGDAyVaga/s1600/Viana+do+Castelo+%2528Antiga%2529+%25282%2529.jpg"

  constructor() { }

  ngOnInit() {
  }

  openFullImg(url: string) {
    window.open(url, '_blank');
  }

}
