import { Component, OnInit } from '@angular/core';
import {Paises, countries } from 'src/app/interfaces/paises';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { registro } from 'src/app/interfaces/registro';
import { RegistroService } from 'src/app/servicios/registro/registro.service';


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

  constructor(public Form:FormBuilder, public router:Router, private http:RegistroService) {
    if(sessionStorage.getItem("rut") != null || localStorage.getItem("rut")  != null){
      this.router.navigate(['home'])
    }
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
    let form_val = this.formulario.value;
    let reg_form:registro = {nombres:form_val.nombres,apellidos:form_val.apellidos,email:form_val.email,pais:form_val.pais.split(',')[0],
      contrase??a:form_val.contrasena,ciudad:form_val.city,documento:form_val.docu,telefono:form_val.pais.split(',')[1]+form_val.telefono}
    console.log(form_val.pais.split(',')[0]);
    
    console.log(reg_form);
    this.http.POSTREGISTRO(reg_form).subscribe(datos=>{
        if(datos.status == "ok"){
          let hide:any = document.getElementById('formulario');
          hide.style.display = "none";
          this.exito.style.display = "block";
        }  
      }  
    )
    setTimeout(() => {
      this.router.navigateByUrl('')
    }, 5000);  //5s
    
  }
}
