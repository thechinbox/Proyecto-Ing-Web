import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';
import { registro } from 'src/app/interfaces/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
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

  POSTREGISTRO(reg:registro):Observable<any>{
    return this.http.post(`${environment.hostname}/registrocomun`,JSON.stringify({"nombres":reg.nombres,"apellidos":reg.apellidos,"email":reg.email,"rut":reg.documento,"pais":reg.pais,"ciudad":reg.ciudad,
    "telefono":reg.telefono,"clave":reg.contraseña}),this.HttpUploadOptions);
  }

}
