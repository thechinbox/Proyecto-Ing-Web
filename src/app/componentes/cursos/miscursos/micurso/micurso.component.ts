import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { clase } from 'src/app/interfaces/clase';
import { curso } from 'src/app/interfaces/curso';
import { modulo } from 'src/app/interfaces/modulo';
import { progreso } from 'src/app/interfaces/progreso';
import { CursosService } from 'src/app/servicios/cursos/cursos.service';

@Component({
  selector: 'app-micurso',
  templateUrl: './micurso.component.html',
  styleUrls: ['./micurso.component.scss']
})
export class MicursoComponent implements OnInit, OnDestroy {
  curso:curso ;
  progreso:progreso;
  nroclase_actual:number;
  nromodulo_actual:number;
  clase_actual:clase;

  constructor(public router:Router, private http:CursosService) { 
    this.nroclase_actual=0;
    this.nromodulo_actual=0;
    this.clase_actual = {"idclase": 0, "nombre":'',"descripcion":'',"nroclase":0,"video":''}
    this.progreso = {"clavecurso":0,"idclase":0,"idmodulo":0,"rut":' '};
    this.curso = {"clavecurso": 1111111111, "profesor": '', "nombrecurso": ' ', "descripcion":' ', "modulos": new Array<modulo>()}
  }
  
  ngOnInit(): void {
    if(sessionStorage.getItem("rut") == null ){
      if(localStorage.getItem("rut") == null){
        this.router.navigate(['']);
      }
    }
    this.http.GETPROGRESO(sessionStorage.getItem("rut"),sessionStorage.getItem("clavecurso")).subscribe(datos=>{
      this.progreso = datos;      
    })
    this.http.GETCURSOPARTC(sessionStorage.getItem("rut"), sessionStorage.getItem("clavecurso")).subscribe(datos=>{        
      this.curso = datos;
      for(let modulo of this.curso.modulos){
        if(modulo.id == this.progreso.idmodulo){
          this.nromodulo_actual = modulo.nromodulo;
        }
        for(let clase of modulo.clases){
          if(clase.idclase == this.progreso.idclase){
            this.nroclase_actual = clase.nroclase;
            this.clase_actual = clase;         
          }
        }
      }
    }) 
    let video:any = document.querySelector("video");
    video.onended = function() {
      if(this.played.end(0) - this.played.start(0) === this.duration) {
        console.log("Played all");
      }
    }
  }
  cambiar_clase(clase:clase){
    this.clase_actual = clase;    
  }

  ngOnDestroy():void{
    sessionStorage.removeItem("clavecurso")
  }
}
