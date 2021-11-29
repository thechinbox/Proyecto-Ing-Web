import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { curso } from 'src/app/interfaces/curso';
import { CursosService } from 'src/app/servicios/cursos/cursos.service';
import { HomeService } from 'src/app/servicios/home/home.service';

@Component({
  selector: 'app-miscursos',
  templateUrl: './miscursos.component.html',
  styleUrls: ['./miscursos.component.scss']
})
export class MiscursosComponent implements OnInit {
  cursos:Array<curso>;
  
  constructor(public router:Router, private http:HomeService) {
    this.cursos = new Array();
    if(sessionStorage.getItem("rut") == null ){
      if(localStorage.getItem("rut") == null){
        this.router.navigate(['']);
      }else{
        http.GETCURSOSPARTC(localStorage.getItem("rut")).subscribe(datos=>{
          this.cursos = datos;
        }); 
      }
    }else{
      http.GETCURSOSPARTC(sessionStorage.getItem("rut")).subscribe(datos=>{
        this.cursos = datos;
      });       
    } 
   }

  ngOnInit(): void {
  }

  traspaso(id:any){
    sessionStorage.setItem("clavecurso",id)
  }


}
