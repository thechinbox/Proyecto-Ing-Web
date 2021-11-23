import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from 'src/app/servicios/cursos/cursos.service';
import { clase } from 'src/app/interfaces/clase';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {
  clases:Array<clase> | undefined;

  constructor(public router:Router, public http:CursosService) {
    
    http.GETCURSO(sessionStorage.getItem("clavecurso")).subscribe(datos=>{
      this.clases = datos;
      console.log(this.clases); 
    })
    
  }

  ngOnInit(): void {
  }

}
