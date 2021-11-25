import { HttpHeaders,HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

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
    return this.http.post(`${environment.hostname}/getcurso`, JSON.stringify({"clavecurso":clavecurso}), this.HttpUploadOptions)
  }
  POSTPARTC(rut:any,clavecurso:any):Observable<any>{
    return this.http.post(`${environment.hostname}/participar`, JSON.stringify({"rut":rut,"clavecurso":clavecurso}), this.HttpUploadOptions)
  }

}
