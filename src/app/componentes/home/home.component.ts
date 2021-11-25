import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { curso } from 'src/app/interfaces/curso';
import { HomeService } from 'src/app/servicios/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cursos:any;
  constructor(public router:Router, private http:HomeService) { 
    this.cursos = new Array();
    if(sessionStorage.getItem("rut") == null ){
      if(localStorage.getItem("rut") == null){
        this.router.navigate(['']);
      }else{
        this.http.GETCURSOSPARTC(localStorage.getItem("rut")).subscribe(datos=>{
          this.cursos = datos;
          console.log(this.cursos);
        })       
      }
    }else{
      this.http.GETCURSOSPARTC(sessionStorage.getItem("rut")).subscribe(datos=>{        
        this.cursos = datos;
        console.log(this.cursos);
      }) 
    }     

    
  }

  ngOnInit(): void {
    
  }

}
