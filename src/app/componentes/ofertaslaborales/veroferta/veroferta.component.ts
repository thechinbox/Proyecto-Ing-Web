import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comun } from 'src/app/interfaces/comun';
import { oferta } from 'src/app/interfaces/oferta';
import { OfertaslaboralesService } from 'src/app/servicios/ofertaaslaborales/ofertaslaborales.service';

@Component({
  selector: 'app-veroferta',
  templateUrl: './veroferta.component.html',
  styleUrls: ['./veroferta.component.scss']
})
export class VerofertaComponent implements OnInit, OnDestroy {
  oferta:oferta;
  selector:number;
  tiempo:number;
  postulantes:Array<Comun>;

  constructor(public router:Router, private http:OfertaslaboralesService) {
    this.oferta = this.http.GETOFERTA();
    this.selector = 0;
    this.tiempo =0;
    this.postulantes = new Array<Comun>();
    if(sessionStorage.getItem("idoferta") == null){
      this.router.navigate(["/empresa"])
    }
    this.http.GETSOLICITUDESEMPRESA(sessionStorage.getItem("idoferta")).subscribe(datos => {
      this.postulantes =datos.postulantes;
      console.log(this.postulantes);
      
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy():void{
    sessionStorage.removeItem("idoferta");
  }
}
