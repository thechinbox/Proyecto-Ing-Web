import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { curso } from 'src/app/interfaces/curso';
import { CursosService } from 'src/app/servicios/cursos/cursos.service';

@Component({
  selector: 'app-home-pro',
  templateUrl: './home-pro.component.html',
  styleUrls: ['./home-pro.component.scss']
})
export class HomeProComponent implements OnInit {
  cursos:Array<curso>;
  mostrar:boolean;

  constructor(public router:Router, private http:CursosService) {
    this.cursos = new Array();
    if(sessionStorage.getItem("rutpro") == null ){
      if(localStorage.getItem("rutpro") == null){
        this.router.navigate(['']);
      }
      else{
        this.http.GETCURSOSPRO(localStorage.getItem("rutpro")).subscribe(datos => {
          this.cursos = datos;
        })
      }
    }else{
      this.http.GETCURSOSPRO(sessionStorage.getItem("rutpro")).subscribe(datos => {
        this.cursos = datos;
      })
    }
    this.mostrar = false;
    
  }

  cerrar(clavecurso:any){
    console.log(clavecurso);
    
    this.http.POSTCERRAR(clavecurso).subscribe(datos =>{
      if(datos.status == "ok"){
        this.mostrar = true;
        for(let i in this.cursos){  
          if(this.cursos[i].clavecurso == clavecurso){
            delete this.cursos[i];
          }
        }
        this.cursos = this.cursos.filter(value => Object.keys(value).length !== 0);
        setTimeout(() => {
          this.mostrar = false;
        }, 5000);  //5s
      }
    })
  }
  ngOnInit(): void {
  }

}
