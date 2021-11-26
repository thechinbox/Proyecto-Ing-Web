import { Component, OnDestroy, OnInit } from '@angular/core';
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
  lista_clases:Array<clase>;
  progreso:progreso;

  constructor(public router:Router, private http:CursosService) { 
    this.lista_clases = new Array();
    this.progreso = {"clavecurso":0,"idclase":0,"idmodulo":0,"rut":' '};
    this.curso = {"clavecurso": 1111111111, "profesor": '', "nombrecurso": ' ', "descripcion":' ', "modulos": new Array<modulo>()}
  }

  ngOnInit(): void {
    if(sessionStorage.getItem("rut") == null ){
      if(localStorage.getItem("rut") == null){
        this.router.navigate(['']);
      }
    }
    this.http.GETCURSOPARTC(sessionStorage.getItem("rut"), sessionStorage.getItem("clavecurso")).subscribe(datos=>{        
      this.curso = datos;
      for(let modulo of this.curso.modulos){
        for(let clase of modulo.clases){
          this.lista_clases.push(clase)
        }
      }
      console.log(this.curso);
    }) 
    this.http.GETPROGRESO(sessionStorage.getItem("rut"),sessionStorage.getItem("clavecurso")).subscribe(datos=>{
      this.progreso = datos;      
    })
  }



  ngOnDestroy():void{
    sessionStorage.removeItem("clavecurso")
  }
}
