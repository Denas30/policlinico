import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {


 private icon = "assets/icon/img/iconos/";
 public idCarteraGenera: any;

  slideOpts = {
    initialSlide: 0,
    //speed: 400,
    // loop: true,
    slidesPerView:2.5,
    spaceBetween: 5,
    //autoplay:true
  };



  sliderCard = [
    {
      text: "Medicina general",
      icon: `${this.icon}` + "general.png",
      id: 1
    },
    {
      text: "Obstetricia",
      icon: `${this.icon}` + "obstetricia.png",
      id: 2
    },
    {
      text: "Endocrinologia",
      icon:  `${this.icon}` + "tiroides.png",
      id: 3
    },
    {
      text: "Traumatologia",
      icon: `${this.icon}` + "traumatologia.png",
      id: 4
    },
    {
     text: "Gastroenterología",
     icon:  `${this.icon}` + "gastro.png",
     id: 5
    },
    {
      text: "Pediatria",
      icon: `${this.icon}` + "pediatria.png",
      id: 6
    },
    {
      text: "Ginecologia",
      icon:  `${this.icon}` + "gineco.png",
      id: 7
    },
    {
      text: "Urología",
      icon:  `${this.icon}` + "urologia.png",
      id: 8
    },
    {
      text: "Cirugía Cardiovascular",
      icon: `${this.icon}` + "heart.png",
      id: 9
    },

    {
      text: "Nutrición",
      icon: `${this.icon}` + "plan.png",
      id: 10
    },
    {
      text: "Psicología",
      icon: `${this.icon}` + "psicologia.png",
      id: 11
    },
    {
      text: "Laboratorio Clínico",
      icon: `${this.icon}` + "observacion.png",
      id: 12
    },
    {
      text: "Rayos x",
      icon:  `${this.icon}` + "rayos-x.png",
      id: 13
    },
    {
      text: "Ecografía",
      icon: `${this.icon}` + "ultrasonido.png",
      id: 14
    },

  ]

  doctors = [
    {
     name: "Dr.Caro",
     especialidad: "Medicina General",
     centro: "Policlínico Próceres",
     class: "blueMedicina"
    },
    {
     name: "Dr.Izquierdo",
     especialidad: "Medicina General",
     centro: "Policlínico Próceres",
     class: "blueMedicina"
    },
    {
     name: "Dr.Diaz",
     especialidad: "Traumatología",
     centro: "Policlínico Próceres",
     class: "yellowTrauma"
    },
    {
     name: "Dr.Medina",
     especialidad: "Gastroenterologia",
     centro: "Policlínico Próceres",
     class: 'gastroColor'
    },
    {
     name: "Dr.Yanac",
     especialidad: "Ginecologo",
     centro: "Policlínico Próceres",
     class: "ginecoloColor"
    },
    {
     name: "Dr.Romero",
     especialidad: "Urologo",
     centro: "Policlínico Próceres",
     class: "urologoColor"
    },
    {
     name: "Dr.Huilca",
     especialidad: "Pediatra",
     centro: "Policlínico Próceres",
     class: "peditriaColor"
    },
    {
     name: "Dr.Ramos",
     especialidad: "Cardiovascular",
     centro: "Policlínico Próceres",
     class: "cardioColor"
    },
    {
     name: "Dra.Pamela Maite",
     especialidad: "Reumatologa",
     centro: "Policlínico Próceres",
     class: "reumatoColor"
    },
    {
     name: "Lic.Cristina",
     especialidad: "Nutrición",
     centro: "Policlínico Próceres",
     class: "nutricionColor"
    },
    {
     name: "Lic.Lourdes",
     especialidad: "Obstetra",
     centro: "Policlínico Próceres",
     class: "obstetraColor"
    },

]

  constructor(private route: Router,
              private menu: MenuController,
              private activeRoute: ActivatedRoute ) {}


    ngOnInit(): void {
      this.activeRoute.paramMap.subscribe((params: ParamMap) => {
        this.idCarteraGenera =  params.get('id');
      });
    }


  datesProfile(){
  const r = this.route.navigate(['intranet/profile']);
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  paciente() {
    this.route.navigate(['intranet/paciente']);
  }

  wallet() {
    this.route.navigate(['intranet/wallet']);
  }
}
