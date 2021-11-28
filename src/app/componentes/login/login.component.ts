import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login/login.service';
import { HomeService } from 'src/app/servicios/home/home.service';
import { Comun } from 'src/app/interfaces/comun';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulario:FormGroup;
  hide:any;

  constructor(public form:FormBuilder, private http:LoginService, public router:Router ) {
    if(sessionStorage.getItem("rut") != null || localStorage.getItem("rut")  != null){
      this.router.navigate(['home'])
    }
    this.formulario = this.form.group({
      email:["",Validators.compose([Validators.nullValidator, Validators.required, Validators.email])],
      password:["",Validators.compose([Validators.nullValidator, Validators.required])],
      recordar:[""]
    })
  }

  ngOnInit(): void {
    this.hide = document.getElementById('error');
    this.hide.style.display = "none";  
    let login:any = document.getElementById('sesion');
    login.style.display = "none"
  }

  login(){    
    let login:any = document.getElementById('sesion');
    login.style.display = "flex"
    let form_val = this.formulario.value;      
    this.http.LOGINCOMUN(form_val.email, form_val.password).subscribe(datos=>
      {
        if(datos.length == 0){
          login.style.display = "none"
          console.log("error");
          this.hide.style.display = "flex"
        }else{
          console.log( datos[0].rut);
          
          if(form_val.recordar == true){
            localStorage.setItem("rut", datos[0].rut)
          }
          else{
            sessionStorage.setItem("rut", datos[0].rut)
          }
          this.router.navigate(['home'])
        }
      }
    )
  }
}
