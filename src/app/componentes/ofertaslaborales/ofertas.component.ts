import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { oferta } from 'src/app/interfaces/oferta';
import { empresa } from 'src/app/interfaces/empresa';
import { Router } from '@angular/router';
import { OfertaslaboralesService } from 'src/app/servicios/ofertaaslaborales/ofertaslaborales.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss']
})
export class OfertasComponent implements OnInit {
  ofertas:Array<oferta>;
  selector:number;

  constructor(public router:Router, public http:OfertaslaboralesService) {
    this.ofertas = new Array();
    this.selector = 0;
   }

  ngOnInit(): void {
    if(sessionStorage.getItem("rut") == null ){
      if(localStorage.getItem("rut") == null){
        this.router.navigate(['']);
      }
      else{
        this.http.GETOFERTAS(localStorage.getItem("rut")).subscribe(datos=>{
          if(datos.status == "ok" ){
            this.ofertas = datos.lista;
          }
        })
      }
    }else{
      this.http.GETOFERTAS(sessionStorage.getItem("rut")).subscribe(datos=>{
        if(datos.status == "ok" ){
          this.ofertas = datos.lista;
        }
      })
    }
    
  }
  verOferta(oferta:oferta){
    this.http.SETOFERTA(oferta);
  }
  getTime(timestamp:any){
    let now = new Date();
    let of = new Date(timestamp)
    let segundos= Math.round((now.getTime() - of.getTime())/1000)
    if(segundos >= 0 && segundos <60){
      return segundos;
    }else if(Math.round(segundos/60) >= 1 && Math.round(segundos/60) < 60){
      this.selector = 1;
      return Math.round(segundos/60);
    }else if(Math.round(segundos/3600) >= 1 && Math.round(segundos/3600) < 24){
      this.selector = 2;
      return Math.round(segundos/3600);
    }else{
      this.selector = 3;
      return Math.round(segundos/122400);
    }
    
    return Math.round((now.getTime() - of.getTime())/1000);

  }

}
