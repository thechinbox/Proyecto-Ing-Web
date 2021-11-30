import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { curso } from 'src/app/interfaces/curso';
import { CursosService } from 'src/app/servicios/cursos/cursos.service';

@Component({
  selector: 'app-sinpublicar',
  templateUrl: './sinpublicar.component.html',
  styleUrls: ['./sinpublicar.component.scss']
})
export class SinpublicarComponent implements OnInit {
  cursos:Array<curso>;
  mostrar:boolean;

  constructor(public router:Router, private http:CursosService) {
    this.cursos = new Array();
    if(sessionStorage.getItem("rutpro") == null ){
      if(localStorage.getItem("rutpro") == null){
        this.router.navigate(['/profesional']);
      }
      else{
        this.http.GETCURSOS_NOP(localStorage.getItem("rutpro")).subscribe(datos => {
          this.cursos = datos;
        })
      }
    }else{
      this.http.GETCURSOS_NOP(sessionStorage.getItem("rutpro")).subscribe(datos => {
        this.cursos = datos;
      })
    }
    this.mostrar = false;
  }

  publicar(clavecurso:any){
    this.http.POSTPUB(clavecurso).subscribe(datos =>{
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
