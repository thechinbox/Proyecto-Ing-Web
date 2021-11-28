import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { clase } from 'src/app/interfaces/clase';
import { curso } from 'src/app/interfaces/curso';
import { modulo } from 'src/app/interfaces/modulo';
import { progreso } from 'src/app/interfaces/progreso';
import { CursosService } from 'src/app/servicios/cursos/cursos.service';
import { filter } from 'rxjs/operators'

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
  idlastmodulo:number;
  idlastclase:number;
  tiempoestudio:number;
  reload:boolean;

  constructor(public router:Router, private http:CursosService) {
    this.tiempoestudio = 0;
    this.reload = false;
    this.clase_actual = {"idclase": 0, "nombre":'',"descripcion":'',"video":'',"duracionclase": 0}
    this.modulo_actual = {"id": 0,"nombre":'',"descripcion":'',"video":"","clases": new Array<clase>()}
    this.clase_progreso = {"idclase": 0, "nombre":'',"descripcion":'',"video":'',"duracionclase": 0}
    this.modulo_progreso = {"id": 0,"nombre":'', "descripcion":'',"video":"","clases": new Array<clase>()}
    this.progreso = {"clavecurso":0,"idclase":0,"idmodulo":0,"rut":' '};
    this.curso = {"clavecurso": 1111111111, "profesor": '', "nombrecurso": ' ', "descripcion":' ', "modulos": new Array<modulo>()}
    this.idlastclase = 0;
    this.idlastmodulo = 0;    
    
  }
  
  ngOnInit(): void {
    let hide:any = document.getElementById("mensaje");
    hide.style.display = "none"
    if(sessionStorage.getItem("rut") == null ){
      if(localStorage.getItem("rut") == null){
        this.router.navigate(['']);
      }
    }
    if(sessionStorage.getItem("clavecurso") == null ){
      this.router.navigate(['home']);
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
        if(modulo.id == this.curso.modulos[this.curso.modulos.length -1].id){
          this.idlastmodulo = modulo.id
        }
        for(let clase of modulo.clases){
          if(clase.idclase == this.progreso.idclase){
            this.clase_actual = clase;    
            this.clase_progreso = clase; 
          }
          if(modulo.id == this.idlastmodulo && clase.idclase == modulo.clases[modulo.clases.length - 1].idclase){
            this.idlastclase = clase.idclase;
          }
        }
      }    
    }) 
    window.onbeforeunload = () =>{ 
      this.reload = true;
      this.ngOnDestroy();
    }
  }

  checkvid(status:any){            
    if(status = "ok" && this.clase_actual.idclase == this.clase_progreso.idclase && this.modulo_progreso.id == this.modulo_actual.id){
      if(this.modulo_progreso.id != this.idlastmodulo || (this.modulo_progreso.id == this.idlastmodulo && this.clase_progreso.idclase != this.idlastclase)){
        let breakc = false; 
        for(let modulo of this.curso.modulos){
          if(breakc){break;}
          for(let clase of modulo.clases){
            if(this.clase_progreso.idclase + 1 <= this.modulo_progreso.clases.length && this.clase_progreso.idclase + 1 == clase.idclase && this.modulo_progreso.id == modulo.id){
              this.clase_progreso = clase;
              this.tiempoestudio += this.clase_progreso.duracionclase;
              breakc = true;
              break;
            }else if(this.clase_progreso.idclase + 1 > this.modulo_progreso.clases.length && this.modulo_progreso.id + 1 == modulo.id && clase.idclase == 1){
              this.clase_progreso = clase;
              this.modulo_progreso = modulo;
              console.log("yep"); 
              this.tiempoestudio += this.clase_progreso.duracionclase;
              breakc = true;
              break;
            }
          }
        }
      }else{
        this.tiempoestudio += this.clase_actual.duracionclase;
        if(sessionStorage.getItem("rut") != null){
          this.http.POSTFIN(this.progreso, sessionStorage.getItem("rut"),this.tiempoestudio).subscribe(datos=>{
            if(datos.status == "ok"){
              let contenido:any = document.getElementById("contenido");
              contenido.style.display = "none"
              let hide:any = document.getElementById("mensaje");
              hide.style.display = "flex"
              setTimeout(() => {
                this.router.navigateByUrl('certificados', {skipLocationChange: true})
              }, 5000);  //5s
            }
          })
        }else{
          this.http.POSTFIN(this.progreso, sessionStorage.getItem("rut"),this.tiempoestudio).subscribe(datos=>{
            if(datos.status == "ok"){
              let contenido:any = document.getElementById("contenido");
              contenido.style.display = "none"
              let hide:any = document.getElementById("mensaje");
              hide.style.display = "flex"
              setTimeout(() => {
                this.router.navigateByUrl('certificados', {skipLocationChange: true})
              }, 5000);  //5s
            }
          })
        }
      }
    }    
  }

  cambiar_clasenmodulo(clase:clase, modulo:modulo){
    this.clase_actual = clase;    
    this.modulo_actual = modulo;
  }

  ngOnDestroy():void{
    if(!this.reload){
      sessionStorage.removeItem("clavecurso")
    }
    if((this.progreso.idclase < this.clase_progreso.idclase && this.progreso.idmodulo == this.modulo_progreso.id) ||
        this.progreso.idmodulo < this.modulo_progreso.id){  
        
      this.progreso.idmodulo = this.modulo_progreso.id;
      this.progreso.idclase = this.clase_progreso.idclase;
      if(sessionStorage.getItem("rut") != null){
        this.http.POSTPROGRESO(this.progreso, sessionStorage.getItem("rut"),this.tiempoestudio).subscribe(datos=>{
        if(datos.status == "ok"){
          this.router.navigate(['home'])
        }
      })
      }else{
        this.http.POSTPROGRESO(this.progreso, localStorage.getItem("rut"),this.tiempoestudio).subscribe(datos=>{
        if(datos.status == "ok"){
          this.router.navigate(['home'])
          }
        })
      }

    }
  }
}
