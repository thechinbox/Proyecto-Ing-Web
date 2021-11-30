import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { clase } from 'src/app/interfaces/clase';
import { curso } from 'src/app/interfaces/curso';
import { modulo } from 'src/app/interfaces/modulo';
import { CursosService } from 'src/app/servicios/cursos/cursos.service';

@Component({
  selector: 'app-cursopro',
  templateUrl: './cursopro.component.html',
  styleUrls: ['./cursopro.component.scss']
})
export class CursoproComponent implements OnInit {
  curso:curso;
  moduloEdit:modulo;
  modulos:Array<modulo>;
  cursoF:FormGroup;
  editM:boolean;
  erreditM:boolean;
  errPostCurso:boolean;
  pub:boolean;
  end:boolean;

  constructor(public router:Router, public Form:FormBuilder, private http:CursosService) {
    if(sessionStorage.getItem("rutpro") == null ){
      if(localStorage.getItem("rutpro") == null){
        this.router.navigate(['/profesional']);
      }
    }
    this.modulos = new Array<modulo>()
    this.curso = {"clavecurso":0,"descripcion":"","modulos":this.modulos,"nombrecurso":"","profesor":""}
    this.cursoF = this.Form.group({
      nombre:["",Validators.compose([Validators.nullValidator, Validators.required])],
      descripcion:["",Validators.compose([Validators.nullValidator, Validators.required])],
      publicar:[""]
    }) 
    this.moduloEdit = {"id":0,"descripcion":"","nombre":"","clases": new Array<clase>()};
    this.editM = false;
    this.erreditM = false;
    this.errPostCurso = false;
    this.pub = false;
    this.end = false;
  }

  ngOnInit(): void {
  }

  addmodulo(e:modulo){
    this.modulos.push(e)    
  }
  
  endEdit(e:any){
    this.editM = false;
  }

  postclase(clavecurso:any, id:number){
    console.log("post");
    console.log(clavecurso.clavecurso);
    console.log(id);

    for(let clase of this.modulos[id - 1].clases){
      clase.video = "curso" + String(clavecurso.clavecurso) + "modulo" + String(id) + "clase" + clase.idclase;
      console.log(clase.video);
      
      this.http.POSTCLASE(clavecurso, id, clase).subscribe(datos => {
        console.log(datos);
      })
      if(clase.idclase == this.modulos[this.modulos.length - 1].clases[this.modulos[this.modulos.length - 1].clases.length - 1].idclase){
        this.cursoF.reset()
        this.end = true;
        if(this.pub){
          setTimeout(() => {
            this.router.navigate(["'/profesional'"])
          }, 3000);  //5s
        }else{
          setTimeout(() => {
            this.router.navigate(["'/profesional/sinpublicar'"])
          }, 3000);  //5s
        }
        this.modulos = new Array<modulo>()
        this.curso = {"clavecurso":0,"descripcion":"","modulos":this.modulos,"nombrecurso":"","profesor":""}
      }
    }
  }
  postmodulo(clavecurso:any){
    for(let modulo of this.modulos){
      this.http.POSTMODULO(clavecurso, modulo).subscribe(datosM => {
        if(datosM.status == "ok"){
          this.postclase(clavecurso,modulo.id);
        }
      })
    } 
  }
  postCurso(){
    if(this.modulos.length >= 1){
      let mf_v = this.cursoF.value;
      this.curso.nombrecurso = mf_v.nombre;
      this.curso.descripcion = mf_v.descripcion;
      this.curso.profesor = this.curso.descripcion;
      
      if(mf_v.publicar != null && mf_v.publicar == true){
        this.pub = true;
      }
      if(sessionStorage.getItem("rutpro") != null ){
        this.http.POSTCURSO(this.curso, sessionStorage.getItem("rutpro"), this.pub).subscribe(datos => {
          if(datos != null){
            this.postmodulo(datos)
          }
        })
      }else{
        this.http.POSTCURSO(this.curso, sessionStorage.getItem("rutpro"), this.pub).subscribe(datos => {
          if(datos != null){
            this.postmodulo(datos)
          }
        })
      }
    }else{
      this.errPostCurso = true;
      setTimeout(() => {
        this.errPostCurso = false;
      }, 3000);  //3s
    }
  }

  initEditM(id:number){
    for(let modulo of this.modulos){
      if(modulo.id == id){
        this.moduloEdit = modulo;
        this.editM = true;
      }
    }
  }
  
  eliminarmodulo(id:number){
    if(!this.editM){
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
    }else{
      this.erreditM = true;
      setTimeout(() => {
        this.erreditM = false;
      }, 3000);  //3s
    }
  }
}
