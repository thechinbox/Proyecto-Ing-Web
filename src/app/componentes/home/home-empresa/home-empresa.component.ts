import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { oferta } from 'src/app/interfaces/oferta';
import { OfertaslaboralesService } from 'src/app/servicios/ofertaaslaborales/ofertaslaborales.service';

@Component({
  selector: 'app-home-empresa',
  templateUrl: './home-empresa.component.html',
  styleUrls: ['./home-empresa.component.scss']
})
export class HomeEmpresaComponent implements OnInit {
  selector:number;
  ofertas:Array<oferta>;

  constructor(public router:Router, private http: OfertaslaboralesService) {
    this.ofertas = new Array();
    this.selector = 0;
    sessionStorage.setItem("rutempresa",'99999999999')
    console.log(sessionStorage.getItem("rutempresa"));
    
    if(sessionStorage.getItem("rutempresa") != null){
      this.http.GETOFERTASEMPRESA(sessionStorage.getItem("rutempresa")).subscribe(datos => {
        if(datos.status){
          this.ofertas=datos.lista;
          console.log(this.ofertas);
        }
      })
    }else{
      this.http.GETOFERTASEMPRESA(localStorage.getItem("rutempresa")).subscribe(datos => {
        if(datos.status){
          this.ofertas=datos.lista;
          console.log(this.ofertas);
        }
      })
    }
    
   }

  ngOnInit(): void {

  }

  verOferta(oferta:any){
    sessionStorage.setItem("idoferta", oferta.idoferta); 
    this.http.SETOFERTA(oferta);
    this.router.navigate(["empresa/veroferta"])
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
  }
}
