import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onGoToHome() {
    this.router.navigate(['home']);
  }
}
