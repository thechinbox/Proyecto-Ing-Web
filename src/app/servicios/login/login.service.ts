import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
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

  LOGINCOMUN(email:string,clave:string):Observable<any>{
    return this.http.post(`${environment.hostname}/logincomun`,JSON.stringify({"email":email,"clave":clave}),this.HttpUploadOptions)
  }
  LOGINPRO(email:string,clave:string):Observable<any>{
    return this.http.post(`${environment.hostname}/loginpro`,JSON.stringify({"email":email,"clave":clave}),this.HttpUploadOptions)
  }
  LOGINEMPRESA(email:string,clave:string):Observable<any>{
    return this.http.post(`${environment.hostname}/loginempresa`,JSON.stringify({"email":email,"clave":clave}),this.HttpUploadOptions)
  }

}
