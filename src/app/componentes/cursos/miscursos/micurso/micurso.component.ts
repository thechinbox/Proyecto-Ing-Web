import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { curso } from 'src/app/interfaces/curso';
import { CursosService } from 'src/app/servicios/cursos/cursos.service';

@Component({
  selector: 'app-micurso',
  templateUrl: './micurso.component.html',
  styleUrls: ['./micurso.component.scss']
})
export class MicursoComponent implements OnInit, OnDestroy {
  curso:curso | undefined;

  constructor(public router:Router, private http:CursosService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("rut") == null ){
      if(localStorage.getItem("rut") == null){
        this.router.navigate(['']);
      }
    }
    this.http.GETCURSOPARTC(sessionStorage.getItem("rut"), sessionStorage.getItem("clavecurso")).subscribe(datos=>{        
      this.curso = datos;
      console.log(this.curso);
    }) 
  }

  ngOnDestroy():void{
    sessionStorage.removeItem("clavecurso")
  }
}
