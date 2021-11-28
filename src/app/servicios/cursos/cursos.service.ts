import { HttpHeaders,HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { progreso } from 'src/app/interfaces/progreso';

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
  GETCURSO(rut:any,clavecurso:any):Observable<any>{
    return this.http.post(`${environment.hostname}/getcurso`, JSON.stringify({"rut":rut,"clavecurso":clavecurso}), this.HttpUploadOptions)
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
  POSTFIN(progreso:progreso,rut:any):Observable<any>{
    return this.http.post(`${environment.hostname}/postfin`, 
                          JSON.stringify({"idmodulo":progreso.idmodulo,"idclase":progreso.idclase,"rut":rut,"clavecurso":progreso.clavecurso}), this.HttpUploadOptions)
  }
}
