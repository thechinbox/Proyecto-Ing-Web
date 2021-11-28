import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { oferta } from 'src/app/interfaces/oferta';
import { OfertaslaboralesService } from 'src/app/servicios/ofertaaslaborales/ofertaslaborales.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss']
})
export class OfertaComponent implements OnInit {
  oferta:oferta;
  selector:number;
  tiempo:number;

  constructor(public router:Router, public http:OfertaslaboralesService) {
    this.selector = 0;
    this.tiempo =0;
    this.oferta = {"idoferta":0,"descripcion":"","cargo":"","fechapublicacion":new Date(),"ubicacion":"","empresa":{
      "ciudad":"","descripcion":"","email":"","nombreempresa":"","pais":"","rutempresa":"","telefono":""}
    }
  }

  ngOnInit(): void {
    let mensaje:any = document.getElementById("mensaje")
    mensaje.style.display = "none";
    this.oferta = this.http.GETOFERTA();
    if(this.oferta.idoferta == 0){
      this.router.navigate(["ofertas"])      
    }
    
    let now = new Date();
    let of = new Date(this.oferta.fechapublicacion)
    let segundos= Math.round((now.getTime() - of.getTime())/1000)
    if(segundos >= 0 && segundos <60){
      this.tiempo = segundos;
    }else if(Math.round(segundos/60) >= 1 && Math.round(segundos/60) < 60){
      this.selector = 1;
      this.tiempo = Math.round(segundos/60);
    }else if(Math.round(segundos/3600) >= 1 && Math.round(segundos/3600) < 24){
      this.tiempo = Math.round(segundos/3600);
      this.selector = 2;
    }else{
      this.tiempo = Math.round(segundos/122400);
      this.selector = 2;
    }

  }

  postular(){
    if(sessionStorage.getItem("rut") != null){
      this.http.POSTSOL(this.oferta.idoferta, sessionStorage.getItem("rut")).subscribe(datos=>{
        if(datos.status == "ok"){
          let mensaje:any = document.getElementById("mensaje")
          mensaje.style.display = "flex";
          setTimeout(() => {
            this.router.navigateByUrl('/ofertas')
          }, 5000);  //5s
        }
      })
    }else{
      this.http.POSTSOL(this.oferta.idoferta, localStorage.getItem("rut")).subscribe(datos=>{
        if(datos.status == "ok"){
          let mensaje:any = document.getElementById("mensaje")
          mensaje.style.display = "flex";
          setTimeout(() => {
            this.router.navigateByUrl('/ofertas')
          }, 5000);  //5s
        }
      });
    }
  }

}
