import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  dates = [
    {
      day: '02',
      mouth: 'Mar',
      early: '9am',
      night:'9pm',
      week: 'Jueves'
    },
    {
      day: '03',
      mouth: 'Mar',
      early: '9am',
      night:'9pm',
      week: 'Viernes'
    },
    {
      day: '04',
      mouth: 'Mar',
      early: '9am',
      night:'9pm',
      week: 'Sabado'
    },
    {
      day: '05',
      mouth: 'Mar',
      early: '9am',
      night:'9pm',
      week: 'Domingo'
    },
    {
      day: '06',
      mouth: 'Mar',
      early: '9am',
      night:'9pm',
      week: 'Lunes'
    },
  ]

  constructor(private router: Router,
             ) {

              }

  ngOnInit() {

  }


  backHome() {
   this.router.navigate(['intranet/home']);
  }

}
