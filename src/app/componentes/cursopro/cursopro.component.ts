import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { curso } from 'src/app/interfaces/curso';
import { modulo } from 'src/app/interfaces/modulo';

@Component({
  selector: 'app-cursopro',
  templateUrl: './cursopro.component.html',
  styleUrls: ['./cursopro.component.scss']
})
export class CursoproComponent implements OnInit {
  curso:curso;
  modulos:Array<modulo>;
  cursoF:FormGroup;

  constructor(public Form:FormBuilder) {
    this.modulos = new Array<modulo>()
    this.curso = {"clavecurso":0,"descripcion":"","modulos":this.modulos,"nombrecurso":"","profesor":""}
    this.cursoF = this.Form.group({
      nombres:["",Validators.compose([Validators.nullValidator, Validators.required])],
      descripcion:["",Validators.compose([Validators.nullValidator, Validators.required])],
    }) 
    
  }

  ngOnInit(): void {
  }

  addmodulo(e:modulo){
    this.modulos.push(e)    
  }

  initEditM(id:number){

  }
  eliminarmodulo(id:number){
    for(let i in this.modulos){
      if(this.modulos[i].id == id){
        delete this.modulos[i];       
      }
    }
    this.modulos = this.modulos.filter(value => Object.keys(value).length !== 0); 
    for(let i in this.modulos){
      if(this.modulos[i].id > id){
        this.modulos[i].id = this.modulos[i].id - 1;
      }
    }

  }
}
