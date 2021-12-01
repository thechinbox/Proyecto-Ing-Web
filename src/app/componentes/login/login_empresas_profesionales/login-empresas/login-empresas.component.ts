import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login/login.service';
import { HomeService } from 'src/app/servicios/home/home.service';
import { Comun } from 'src/app/interfaces/comun';
import { Router } from '@angular/router';
import { HomeComponent } from '../../../home/home.component';

@Component({
  selector: 'app-login-empresas',
  templateUrl: './login-empresas.component.html',
  styleUrls: ['./login-empresas.component.scss']
})
export class LoginEmpresasComponent implements OnInit {
  formulario:FormGroup;
  hide:any;
  err1:boolean;
  log:boolean;
  constructor(public form:FormBuilder, private http:LoginService, public router:Router ) {
    if(sessionStorage.getItem("rut") != null || localStorage.getItem("rut")  != null){
      this.router.navigate(['home'])
    }else if(sessionStorage.getItem("rutpro") != null || localStorage.getItem("rutpro")  != null){
      this.router.navigate(['/profesional'])
    }
    this.formulario = this.form.group({
      email:["",Validators.compose([Validators.nullValidator, Validators.required, Validators.email])],
      password:["",Validators.compose([Validators.nullValidator, Validators.required])],
      recordar:[""]
    })
    this.err1 = false;
    this.log = false;
  }

  ngOnInit(): void {

  }

  login(){    
    this.log = true;
    let form_val = this.formulario.value;      
    this.http.LOGINEMPRESA(form_val.email, form_val.password).subscribe(datos=>{
        console.log(datos);
        
        if(datos.length == 0){
          this.err1 = true;

          this.log = false;
          setTimeout(() => {
            this.err1 = false;
          }, 3000);  //5s
        }else{          
          if(form_val.recordar == true){
            localStorage.setItem("rutempresa", datos.rutempresa)
          }
          else{
            sessionStorage.setItem("rutempresa", datos.rutempresa)
          }
          this.router.navigate(['/empresa'])
        }
      }
    )
  }
}
