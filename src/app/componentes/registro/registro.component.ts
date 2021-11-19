import { Component, OnInit } from '@angular/core';
import {Paises, countries } from 'src/app/interfaces/paises';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent implements OnInit {
  public countries:any = countries;
  constructor() {
   }

  ngOnInit(): void {
  }
  onCountrySelected($event: Paises) {
    console.log($event);
  }
}
