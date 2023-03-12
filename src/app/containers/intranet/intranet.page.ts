import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.page.html',
  styleUrls: ['./intranet.page.scss'],
})
export class IntranetPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  aboutUs(){
  this.router.navigate(['about-us']);
  }

  address() {
  this.router.navigate(['intranet/address']);
  }

  paciente() {
    this.router.navigate(['intranet/paciente']);
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
