import { Component, OnInit } from '@angular/core';
import {Paises, countries } from 'src/app/interfaces/paises';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


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
  exito:any
  estado:boolean = true;
  router:Router;

  constructor(public Form:FormBuilder, router:Router) {
    this.formulario = this.Form.group({
      nombres:["",Validators.compose([Validators.nullValidator, Validators.required, Validators.pattern("^[a-zA-Z ]*$")])],
      apellidos:["",Validators.compose([Validators.nullValidator, Validators.required, Validators.pattern("^[a-zA-Z ]*$")])],
      email:["",Validators.compose([Validators.nullValidator, Validators.required, Validators.email])],
      pais:["",Validators.compose([Validators.nullValidator, Validators.required])],
      contrasena:["",Validators.compose([Validators.nullValidator, Validators.required,Validators.minLength(6)])],
      city:["",Validators.compose([Validators.nullValidator, Validators.required])],    
      docu:["",Validators.compose([Validators.nullValidator, Validators.required])],
      telefono:["",Validators.compose([Validators.nullValidator, Validators.required, Validators.pattern("^[0-9]+$"), Validators.minLength(8)])], 
    })  
    this.router=router; 
   }

  ngOnInit(): void {
    this.pais = document.querySelector('#pais');

    this.pais.addEventListener('change', (event:any) => {      
      this.codigo = document.querySelector('#telcode');
      this.codigo.value = event.target.value.split(',')[1]
    });
    this.exito = document.getElementById('exito');
    this.exito.style.display = "none"
  }

  registrarse(){
    let formulario:any = document.getElementById('formulario');
    formulario.style.display = "none"
    this.exito.style.display = "block"
    setTimeout(() => {
      this.router.navigateByUrl('', {skipLocationChange: true})
    }, 5000);  //5s
    
  }
}
