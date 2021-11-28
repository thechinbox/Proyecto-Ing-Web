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
  constructor(public router:Router, public http:OfertaslaboralesService) {
    this.oferta = {"idoferta":0,"descripcion":"","cargo":"","fechapublicacion":new Date(),"ubicacion":"","empresa":{
      "ciudad":"","descripcion":"","email":"","nombreempresa":"","pais":"","rutempresa":"","telefono":""}
    }
  }

  ngOnInit(): void {
    this.oferta = this.http.GETOFERTA();

  }

  getTime(timestamp:any){
    let now = new Date();
    let of = new Date(timestamp)
    
    return Math.round((now.getTime() - of.getTime())/60000);

  }
}
