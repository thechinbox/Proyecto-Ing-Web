import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulario:FormGroup;

  constructor(public Form:FormBuilder) {
    this.formulario = this.Form.group({
      email:["",Validators.compose([Validators.nullValidator, Validators.required, Validators.email])]
    })
  }

  ngOnInit(): void {
  }

}
