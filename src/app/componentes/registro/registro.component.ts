import { Component, OnInit } from '@angular/core';
import {Paises, countries } from 'src/app/interfaces/paises';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent implements OnInit {
  countries:any = countries;
  formulario:FormGroup;
  codigo:any;
  pais:any;

  constructor(public Form:FormBuilder) {
    this.formulario = this.Form.group({
      nombres:["",Validators.compose([Validators.nullValidator, Validators.required, Validators.pattern("^[a-zA-Z ]*$")])],
      apellidos:["",Validators.compose([Validators.nullValidator, Validators.required, Validators.pattern("^[a-zA-Z ]*$")])],
      email:["",Validators.compose([Validators.nullValidator, Validators.required, Validators.email])],
      pais:["",Validators.compose([Validators.nullValidator, Validators.required])],
      contrasena:["",Validators.compose([Validators.nullValidator, Validators.required,Validators.minLength(8)])],
      city:["",Validators.compose([Validators.nullValidator, Validators.required])],    
      docu:["",Validators.compose([Validators.nullValidator, Validators.required])],
      telefono:["",Validators.compose([Validators.nullValidator, Validators.required])], 
    })
   }

  ngOnInit(): void {
    this.pais = document.querySelector('#pais');

    this.pais.addEventListener('change', (event:any) => {      
      this.codigo = document.querySelector('#telcode');
      this.codigo.value = event.target.value.split(',')[1]
    });
  }
}
