import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-wallet-service',
  templateUrl: './wallet-service.component.html',
  styleUrls: ['./wallet-service.component.scss'],
})
export class WalletServiceComponent implements OnInit {

 

  slideOpts = {
    speed: 400,
    loop: true,
    autoplay:true
  };

  public url: string = "assets/icon/img/";

  imgSlider = [

    {
    img: `${this.url}` + "general1.jpg"
    },
    {
    img: `${this.url}` + "general2.jpg"
    },
    {
    img: `${this.url}` + "general3.jpg"
    },
  ]

  constructor(private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params: ParamMap ) =>{
      console.log('llego la url', params.get('id'));
      
    })
  }

  backHome() {
  this.router.navigate(['home']);
  }
}
