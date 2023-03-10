import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {

  segmentModel = "history"

  constructor(private router: Router) { }

  ngOnInit() {}

  backHome() {
    this.router.navigate(['home']);
   }
 
   segmentChanged(event: any) {
     console.log(this.segmentModel);
     console.log(event);
   }
}
