import { HttpHeaders,HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { progreso } from 'src/app/interfaces/progreso';
import { curso } from 'src/app/interfaces/curso';
import { modulo } from 'src/app/interfaces/modulo';
import { clase } from 'src/app/interfaces/clase';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
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
  constructor(private http:HttpClient) { }
  
  GETCURSOS(rut:any):Observable<any>{
    return this.http.post(`${environment.hostname}/getcursos`, JSON.stringify({"rut":rut}), this.HttpUploadOptions)
  }
  GETCURSOSPRO(rut:any):Observable<any>{
    return this.http.post(`${environment.hostname}/getcursospro`, JSON.stringify({"rut":rut, "publicado":true}), this.HttpUploadOptions)
  }
  GETCURSO(rut:any,clavecurso:any):Observable<any>{
    return this.http.post(`${environment.hostname}/getcurso`, JSON.stringify({"rut":rut,"clavecurso":clavecurso}), this.HttpUploadOptions)
  }
  GETCURSOS_NOP(rut:any):Observable<any>{
    return this.http.post(`${environment.hostname}/getcursospro`, JSON.stringify({"rut":rut, "publicado":false}), this.HttpUploadOptions)
  }
  POSTPUB(clavecurso:any):Observable<any>{
    return this.http.post(`${environment.hostname}/postpublicar`, JSON.stringify({"clavecurso":clavecurso}), this.HttpUploadOptions)
  }
  POSTCERRAR(clavecurso:any):Observable<any>{
    return this.http.post(`${environment.hostname}/postcerrar`, JSON.stringify({"clavecurso":clavecurso}), this.HttpUploadOptions)
  }
  POSTPARTC(rut:any,clavecurso:any):Observable<any>{
    return this.http.post(`${environment.hostname}/participar`, JSON.stringify({"rut":rut,"clavecurso":clavecurso}), this.HttpUploadOptions)
  }
  GETCURSOPARTC(rut:any,clavecurso:any):Observable<any>{
    return this.http.post(`${environment.hostname}/getmicurso`, JSON.stringify({"rut":rut,"clavecurso":clavecurso}), this.HttpUploadOptions)
  }
  GETPROGRESO(rut:any,clavecurso:any):Observable<any>{
    return this.http.post(`${environment.hostname}/getprogreso`, JSON.stringify({"rut":rut,"clavecurso":clavecurso}), this.HttpUploadOptions)
  }
  POSTPROGRESO(progreso:progreso,rut:any, tiempoestudio:any):Observable<any>{
    return this.http.post(`${environment.hostname}/postprogreso`, 
                          JSON.stringify({"idmodulo":progreso.idmodulo,"idclase":progreso.idclase,"rut":rut,"clavecurso":progreso.clavecurso,"tiempoestudio":tiempoestudio}), this.HttpUploadOptions)
  }
  POSTFIN(progreso:progreso,rut:any, tiempoestudio:any):Observable<any>{
    return this.http.post(`${environment.hostname}/postfin`, 
                          JSON.stringify({"idmodulo":progreso.idmodulo,"idclase":progreso.idclase,"rut":rut,"clavecurso":progreso.clavecurso, "tiempoestudio":tiempoestudio}), this.HttpUploadOptions)
  }
  POSTCURSO(curso:curso, rut:any, publicar:any):Observable<any>{
    return this.http.post(`${environment.hostname}/postcurso`, JSON.stringify({"curso":curso, "publicar":publicar, "rut": rut}), this.HttpUploadOptions)
  }
  POSTMODULO(clavecurso:any,modulo:modulo):Observable<any>{
    return this.http.post(`${environment.hostname}/postmodulo`, JSON.stringify({"clavecurso":clavecurso, "modulo":modulo}), this.HttpUploadOptions)
  }
  POSTCLASE(clavecurso:any, idmodulo:any, clase:clase):Observable<any>{
    console.log(clavecurso);
    return this.http.post(`${environment.hostname}/postclase`, JSON.stringify({"clavecurso":clavecurso, "idmodulo":idmodulo, "clase":clase}), this.HttpUploadOptions)
  }
}
