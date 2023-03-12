import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {


  constructor(private router: Router) {
    console.log('home', 'page');

   }

  ngOnInit() {}


  paciente() {
    this.router.navigate(['intranet/paciente']);
  }

  wallet() {
    this.router.navigate(['intranet/wallet']);
  }

  aboutUs(){
  this.router.navigate(['about-us']);
  }

  address() {
  this.router.navigate(['intranet/address']);
  }

  history() {
    this.router.navigate(['intranet/history']);
  }


  shareApp() {
    console.log('compartir');

  }

  addDoctor() {
    console.log('add doctor');

  }


}
