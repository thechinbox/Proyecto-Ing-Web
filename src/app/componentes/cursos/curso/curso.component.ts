import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/servicios/cursos/cursos.service';
import { clase } from 'src/app/interfaces/clase';
import { modulo } from 'src/app/interfaces/modulo';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit, OnDestroy {
  modulos:Array<modulo> | undefined;

  constructor(public router:Router, public http:CursosService) {
    
  }

  participar(){
    if(sessionStorage.getItem("rut") != null){
      this.http.POSTPARTC(sessionStorage.getItem("rut"),sessionStorage.getItem("clavecurso")).subscribe(datos=>{
        if(datos.status == "ok"){
          this.router.navigate(['home']) 
        }
      })
    }else{
      this.http.POSTPARTC(localStorage.getItem("rut"),sessionStorage.getItem("clavecurso")).subscribe(datos=>{
        if(datos.status == "ok"){
          this.router.navigate(['home']) 
        }
      })
    }
    
  }


  ngOnInit(): void {
    if(sessionStorage.getItem("clavecurso") == null){
      this.router.navigate(['home']);
    }
    if(sessionStorage.getItem("rut") == null ){
      if(localStorage.getItem("rut") == null){
        this.router.navigate(['']);
      }else{
        this.http.GETCURSO(localStorage.getItem("rut"),sessionStorage.getItem("clavecurso")).subscribe(datos=>{
          this.modulos = datos;
        })      
      }
    }else{
      this.http.GETCURSO(sessionStorage.getItem("rut"),sessionStorage.getItem("clavecurso")).subscribe(datos=>{
        this.modulos = datos;
      })
    } 
  }
  ngOnDestroy(): void {
    sessionStorage.removeItem("clavecurso")
  }


}
