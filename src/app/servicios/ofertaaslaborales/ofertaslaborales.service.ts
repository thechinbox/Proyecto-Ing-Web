import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';
import { oferta } from 'src/app/interfaces/oferta';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OfertaslaboralesService {
  oferta:oferta ;
  HttpUploadOptions = {
    headers: new HttpHeaders(
      {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Content-Type': 'application/json',
    }
    ),
  };
  constructor(private http:HttpClient) { 
    this.oferta = {"idoferta":0,"descripcion":"","cargo":"","fechapublicacion":new Date(),"ubicacion":"","empresa":{
      "ciudad":"","descripcion":"","email":"","nombreempresa":"","pais":"","rutempresa":"","telefono":""}
    }
    
  }

  SETOFERTA(oferta:oferta){
    this.oferta = oferta;
  }
  GETOFERTA(){
    return this.oferta;
  }

  GETOFERTAS(rut:any):Observable<any>{
    return this.http.post(`${environment.hostname}/getofertas`,JSON.stringify({"rut":rut}), this.HttpUploadOptions);
  }
  POSTSOL(idoferta:any, rut:any):Observable<any>{
    return this.http.post(`${environment.hostname}/postsolicitud`, JSON.stringify({"rut":rut,"idoferta":idoferta}), this.HttpUploadOptions);
  }
} 
