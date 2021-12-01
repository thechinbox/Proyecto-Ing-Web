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
  mensaje:boolean;
 
  constructor(private Form:FormBuilder, public router:Router, private http:OfertaslaboralesService) {
    if(sessionStorage.getItem("rutempresa") == null){
      if(localStorage.getItem("rutempresa") == null){
          this.router.navigate(["/empresa"])
      }
    }
    this.formulario=this.Form.group({
       descripcion:["",Validators.compose([Validators.nullValidator, Validators.required])],
       ubicacion:["",Validators.compose([Validators.nullValidator, Validators.required])],
       cargo:["",Validators.compose([Validators.nullValidator, Validators.required])]
      }
    );
    this.mensaje = false;
  }
  
  ngOnInit(): void {
  }

  validacion(){
    let descripcion= this.formulario.get("descripcion")?.value
    let ubicacion =  this.formulario.get("ubicacion")?.value
    let cargo = this.formulario.get("cargo")?.value
    console.log(descripcion,ubicacion,cargo );
    
    if(sessionStorage.getItem("rutempresa") != null){
      this.http.POSTOFERTA(descripcion, ubicacion,cargo, sessionStorage.getItem("rutempresa")).subscribe(datos =>{
        if(datos.status == "ok"){
          this.mensaje = true;
          setTimeout(() =>{
            this.mensaje = false;
          }, 3000)
        }
      })
    }else{
      this.http.POSTOFERTA(descripcion, ubicacion,cargo, sessionStorage.getItem("rutempresa")).subscribe(datos =>{
        if(datos.status == "ok"){
          this.mensaje = true;
          setTimeout(() =>{
            this.mensaje = false;
          }, 3000)
        }
      })
    }
  }
  
}
