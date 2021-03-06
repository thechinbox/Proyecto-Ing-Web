import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { clase } from 'src/app/interfaces/clase';
import { modulo } from 'src/app/interfaces/modulo';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.scss']
})
export class ModuloComponent implements OnInit, OnChanges {
  @Input() id:any;
  @Output() addmodulo:EventEmitter<modulo> = new EventEmitter();
  clases:Array<clase>;
  moduloF:FormGroup;
  claseF:FormGroup;
  length = 0;
  edit:boolean;
  idedit:number;
  erredit:boolean;
  erraddmod:boolean;
  modulo:modulo;
  

  constructor(public router:Router, public Form:FormBuilder) {
    if(sessionStorage.getItem("rutpro") == null ){
      if(localStorage.getItem("rutpro") == null){
        this.router.navigate(['/profesional']);
      }
    }
    this.claseF = this.Form.group({
      nombre:["",Validators.compose([Validators.nullValidator, Validators.required])],
      descripcion:["",Validators.compose([Validators.nullValidator, Validators.required])],
      video:["",Validators.compose([Validators.nullValidator, Validators.required])],
      duracion:["",Validators.compose([Validators.nullValidator, Validators.required, Validators.min(0)])]
    }) 
    this.moduloF = this.Form.group({
      nombreM:["",Validators.compose([Validators.nullValidator, Validators.required])],
      descripcionM:["",Validators.compose([Validators.nullValidator, Validators.required])],
    })    
    this.clases = new Array<clase>(); 
    this.edit = false;
    this.idedit = 0;
    this.erredit = false;
    this.erraddmod = false;
    this.modulo = {"id":0,"descripcion":"","nombre":"","clases": new Array<clase>()}
  }

  ngOnInit(): void {
    console.log(this.id);
    let boton:any = document.querySelector("#addmodulo");
    boton.addEventListener('click', (e:any) => {
      if(this.clases.length <=0){
        this.erraddmod = true;
        setTimeout(() => {
          this.erraddmod = false;
        }, 3000);  //3s}
      }else{
        let mf_v = this.moduloF.value;
        this.modulo.id = this.id + 1;
        this.modulo.nombre = mf_v.nombreM;
        this.modulo.descripcion = mf_v.descripcionM;
        this.modulo.clases = Object.assign([], this.clases);  
        this.addmodulo.emit(Object.assign({},this.modulo));
        this.clases = new Array<clase>();
        this.moduloF.reset()
        this.claseF.reset()
        this.modulo = {"id":0,"descripcion":"","nombre":"","clases": new Array<clase>()}
      }
    }) 
  }

  ngOnChanges(changes:SimpleChanges){
    if(changes["id"]){
      console.log(this.id);
      
    }
  }
  canceledit(){
    this.idedit= 0; 
    this.edit = false;
    this.claseF.reset();
  }
  eliminarClase(id:number){
    if(this.edit != true){
      for(let i in this.clases){
        if(this.clases[i].idclase == id){
          delete this.clases[i];
        }
      }
      this.clases = this.clases.filter(value => Object.keys(value).length !== 0);
      for(let i in this.clases){
        if(this.clases[i].idclase > id){
          this.clases[i].idclase = this.clases[i].idclase - 1;
        }
      }
      console.log(this.clases);
    }
    else{
      this.erredit = true;
      setTimeout(() => {
        this.erredit = false;
      }, 3000);  //3s
    }
  }

  addClase(){
    let valores = this.claseF.value;
    this.clases.push({"idclase":this.clases.length + 1,"nombre":valores.nombre,"descripcion":valores.descripcion, 
                      "video":this.claseF.value.video, "duracionclase":valores.duracion});
    console.log(this.clases);
    this.claseF.reset();
  }

  initEdit(id:number){
    this.idedit= id; 
    this.edit = true;
    for(let clase of this.clases){
      if(clase.idclase == this.idedit){
        this.claseF.controls['nombre'].setValue(clase.nombre)
        this.claseF.controls['descripcion'].setValue(clase.descripcion)
        this.claseF.controls['duracion'].setValue(clase.duracionclase)
      }
    }
  }
  
  editClase(){
    this.claseF.value
    for(let clase of this.clases){
      if(clase.idclase == this.idedit){
        clase.nombre = this.claseF.value.nombre;
        clase.descripcion = this.claseF.value.descripcion;
        clase.video = this.claseF.value.video;
        clase.video = this.claseF.value.duracion;
      }
    }
    this.idedit= 0; 
    this.edit = false;
    this.claseF.reset();
  }
  
}
