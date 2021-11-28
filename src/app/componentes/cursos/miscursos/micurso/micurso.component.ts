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
  clase_actual:clase;
  modulo_actual:modulo;
  clase_progreso:clase;
  modulo_progreso:modulo;

  constructor(public router:Router, private http:CursosService) { 
    this.clase_actual = {"idclase": 0, "nombre":'',"descripcion":'',"video":''}
    this.modulo_actual = {"id": 0,"nombre":'',"descripcion":'',"video":"","clases": new Array<clase>()}
    this.clase_progreso = {"idclase": 0, "nombre":'',"descripcion":'',"video":''}
    this.modulo_progreso = {"id": 0,"nombre":'', "descripcion":'',"video":"","clases": new Array<clase>()}
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
          this.modulo_actual = modulo;
          this.modulo_progreso = modulo;
        }
        for(let clase of modulo.clases){
          if(clase.idclase == this.progreso.idclase){
            this.clase_actual = clase;    
            this.clase_progreso = clase; 
          }
        }
      }
    }) 
  }

  checkvid(status:any){        
    let lastm = this.curso.modulos.length - 1;
    let idc = this.curso.modulos[lastm].clases[this.curso.modulos[lastm].clases.length - 1].idclase
    if(status = "ok" && this.clase_actual.idclase == this.progreso.idclase && this.clase_progreso.idclase != idc){     
      let breakC = false; 
      for(let modulo of this.curso.modulos){
        if(breakC){
          break;
        }
        for(let clase of modulo.clases){       
          if(this.clase_progreso.idclase + 1 == clase.idclase && modulo.id == this.modulo_progreso.id){

            this.progreso.idclase = clase.idclase; 
            this.clase_progreso = clase;
            breakC = true;
            break;
          }
          else if(this.clase_progreso.idclase + 1 > this.modulo_progreso.clases.length &&
                  this.modulo_progreso.id + 1 == modulo.id ){

            this.progreso.idclase = clase.idclase;
            this.progreso.idmodulo = modulo.id;
            this.clase_progreso = clase;
            this.modulo_progreso = modulo;
            
            breakC = true;
            break;
          }
          else if(this.clase_progreso.idclase + 1 > this.modulo_progreso.clases.length && 
                  this.curso.modulos.length == this.modulo_progreso.id){
              this.progreso.idclase = clase.idclase;
              this.progreso.idmodulo = modulo.id;
              this.clase_progreso = clase;
              this.modulo_progreso = modulo;    
              breakC = true;
              break;
          }
        }
      }
      console.log(this.clase_progreso);
      console.log(this.modulo_progreso);
    }else if(status = "ok" && this.clase_progreso.idclase == idc){
      if(sessionStorage.getItem("rut") != null){
        this.http.POSTFIN(this.progreso, sessionStorage.getItem("rut")).subscribe(datos=>{
          if(datos.status == "ok"){
            this.router.navigate(['home'])
          }
        })
      }else{
        this.http.POSTFIN(this.progreso, localStorage.getItem("rut")).subscribe(datos=>{
          if(datos.status == "ok"){
            this.router.navigate(['home'])
          }
        })
      }
    }
  }

  cambiar_clase(clase:clase){
    this.clase_actual = clase;    
  }

  ngOnDestroy():void{
    sessionStorage.removeItem("clavecurso")
    console.log(this.progreso);
    
    if(sessionStorage.getItem("rut") != null){
      this.http.POSTPROGRESO(this.progreso, sessionStorage.getItem("rut")).subscribe(datos=>{
        if(datos.status == "ok"){
          this.router.navigate(['home'])
        }
      })
    }else{
      this.http.POSTPROGRESO(this.progreso, localStorage.getItem("rut")).subscribe(datos=>{
        if(datos.status == "ok"){
          this.router.navigate(['home'])
        }
      })
    }
  }
}
