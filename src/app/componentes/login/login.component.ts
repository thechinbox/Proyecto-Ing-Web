import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login/login.service';
import { Comun } from 'src/app/interfaces/comun';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulario:FormGroup;

  constructor(public Form:FormBuilder, private http:LoginService) {
    this.formulario = this.Form.group({
      email:["",Validators.compose([Validators.nullValidator, Validators.required, Validators.email])],
      password:["",Validators.compose([Validators.nullValidator, Validators.required])]
    })
  }

  ngOnInit(): void {
  }

  login(){
    let form_val = this.formulario.value;
    let user:Comun;
    console.log("yep");
    
    this.http.LOGINCOMUN(form_val.email, form_val.password).subscribe(datos=>
      {
        user = datos[0];
        console.log(user);
        
      }
    )
  }
}
