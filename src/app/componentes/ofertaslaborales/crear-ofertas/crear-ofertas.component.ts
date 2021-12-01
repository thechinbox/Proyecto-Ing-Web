import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {Paises, countries } from 'src/app/interfaces/paises';
import { OfertaslaboralesService } from 'src/app/servicios/ofertaaslaborales/ofertaslaborales.service';
@Component({
  selector: 'app-crear-ofertas',
  templateUrl: './crear-ofertas.component.html',
  styleUrls: ['./crear-ofertas.component.scss']
})
export class CrearOfertasComponent implements OnInit {
  countries:any = countries;
  formulario:FormGroup;
 
  constructor(private Form:FormBuilder, public router:Router, private http:OfertaslaboralesService) {
    if(sessionStorage.getItem("rutempresa") == null){
      if(localStorage.getItem("rutempresa") == null){
          this.router.navigate(["/empresa"])
      }
    }
    this.formulario=this.Form.group({
       fecha:['',Validators.required],
       descripcion:['',Validators.required],
       ubicacion:['',Validators.required],
       cargo:['',Validators.required]
      }
    );
  
  }
  
  ngOnInit(): void {
  }
  validacion(){
    let datos:any=[{
      "fecha": this.formulario.get("fecha")?.value,
      "descripcion": this.formulario.get("descripcion")?.value,
      "ubicacion": this.formulario.get("ubicacion")?.value,
      "cargo": this.formulario.get("cargo")?.value
    }];
    console.log(datos);
  }
  
}
