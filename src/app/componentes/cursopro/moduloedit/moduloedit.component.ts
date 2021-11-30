import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { clase } from 'src/app/interfaces/clase';
import { modulo } from 'src/app/interfaces/modulo';

@Component({
  selector: 'app-moduloedit',
  templateUrl: './moduloedit.component.html',
  styleUrls: ['./moduloedit.component.scss']
})
export class ModuloeditComponent implements OnInit {
  @Input() modulo:modulo;
  @Output() endEdit:EventEmitter<boolean> = new EventEmitter();
  moduloF:FormGroup;
  claseF:FormGroup;
  length = 0;
  edit:boolean;
  idedit:number;
  erredit:boolean;
  erraddmod:boolean;

  constructor(public router:Router, public Form:FormBuilder){
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
    this.modulo = {"id":0,"descripcion":"","nombre":"","clases": new Array<clase>()};
    this.edit = false;
    this.idedit = 0;
    this.erredit = false;
    this.erraddmod = false;
  }

  ngOnInit(): void {
    let boton:any = document.querySelector("#terminar");
    boton.addEventListener('click', (e:any) => {
      console.log("yep");
      
      if(this.modulo.clases.length <=0){
        this.erraddmod = true;
        setTimeout(() => {
          this.erraddmod = false;
        }, 3000);  //3s}
      }else{
        let mf_v = this.moduloF.value;
        this.modulo.nombre = mf_v.nombreM;
        this.modulo.descripcion = mf_v.descripcionM;
        this.endEdit.emit();
        this.moduloF.reset()
        this.claseF.reset()
        this.modulo = {"id":0,"descripcion":"","nombre":"","clases": new Array<clase>()}
      }
    }) 
  }

  ngOnChanges(changes:SimpleChanges){
    if(changes["modulo"]){
      this.moduloF.controls['nombreM'].setValue(this.modulo.nombre)
      this.moduloF.controls['descripcionM'].setValue(this.modulo.descripcion)      
    }
  }
  canceledit(){
    this.idedit= 0; 
    this.edit = false;
    this.claseF.reset();
  }
  eliminarClase(id:number){
    if(this.edit != true){
      for(let i in this.modulo.clases){
        if(this.modulo.clases[i].idclase == id){
          delete this.modulo.clases[i];
        }
      }
      this.modulo.clases = this.modulo.clases.filter(value => Object.keys(value).length !== 0);
      for(let i in this.modulo.clases){
        if(this.modulo.clases[i].idclase > id){
          this.modulo.clases[i].idclase = this.modulo.clases[i].idclase - 1;
        }
      }
      console.log(this.modulo.clases);
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
    this.modulo.clases.push({"idclase":this.modulo.clases.length + 1,"nombre":valores.nombre,"descripcion":valores.descripcion, 
                              "video":this.claseF.value.video, "duracionclase":valores.duracion});
    console.log(this.modulo.clases);
    this.claseF.reset();
  }

  initEdit(id:number){
    this.idedit= id; 
    this.edit = true;
    for(let clase of this.modulo.clases){
      if(clase.idclase == this.idedit){
        this.claseF.controls['nombre'].setValue(clase.nombre)
        this.claseF.controls['descripcion'].setValue(clase.descripcion)
        this.claseF.controls['duracion'].setValue(clase.duracionclase)
      }
    }
  }
  
  editClase(){
    this.claseF.value
    for(let clase of this.modulo.clases){
      if(clase.idclase == this.idedit){
        clase.nombre = this.claseF.value.nombre;
        clase.descripcion = this.claseF.value.descripcion;
        clase.video = this.claseF.value.video;
        clase.duracionclase = this.claseF.value.duracion;
      }
    }
    this.idedit= 0; 
    this.edit = false;
    this.claseF.reset();
  }
}
