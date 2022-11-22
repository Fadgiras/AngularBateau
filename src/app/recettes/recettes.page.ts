import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onGoToHome() {
    this.router.navigate(['home']);
  }
}
