import { HttpHeaders,HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http:HttpClient) { }
  
  GETCURSOS():Observable<any>{
    return this.http.get(`${environment.hostname}/getcursos`)
  }

}
