import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { modulo } from 'src/app/interfaces/modulo';
import { curso } from 'src/app/interfaces/curso';
import { CursosService } from 'src/app/servicios/cursos/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos:Array<curso> | undefined;
  rut:any;

  constructor(public router:Router, public http:CursosService) {
    if(sessionStorage.getItem("rut") == null ){
      if(localStorage.getItem("rut") == null){
        this.router.navigate(['']);
      }else{
        http.GETCURSOS(localStorage.getItem("rut")).subscribe(datos=>{
          this.cursos = datos;
        }); 
      }
    }else{
      http.GETCURSOS(sessionStorage.getItem("rut")).subscribe(datos=>{
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
