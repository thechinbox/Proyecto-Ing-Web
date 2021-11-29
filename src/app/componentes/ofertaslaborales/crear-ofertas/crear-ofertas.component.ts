import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-crear-ofertas',
  templateUrl: './crear-ofertas.component.html',
  styleUrls: ['./crear-ofertas.component.scss']
})
export class CrearOfertasComponent implements OnInit {

  formulario:FormGroup;
 
  constructor(private Form:FormBuilder) {
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
