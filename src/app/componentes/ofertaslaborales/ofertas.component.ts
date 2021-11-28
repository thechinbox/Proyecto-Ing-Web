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

  constructor(public router:Router, public http:OfertaslaboralesService) {
    this.ofertas = new Array();
   }

  ngOnInit(): void {
    if(sessionStorage.getItem("rut") == null ){
      if(localStorage.getItem("rut") == null){
        this.router.navigate(['']);
      }
    }
    this.http.GETOFERTAS().subscribe(datos=>{
      if(datos.status == "ok" ){
        this.ofertas = datos.lista;
      }
    })
  }
  verOferta(oferta:oferta){
    this.http.SETOFERTA(oferta);
    
  }
  getTime(timestamp:any){
    let now = new Date();
    let of = new Date(timestamp)
    
    return Math.round((now.getTime() - of.getTime())/60000);

  }

}
