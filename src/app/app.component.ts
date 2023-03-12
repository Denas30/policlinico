import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}


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
