import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opcion-login',
  templateUrl: './opcion-login.component.html',
  styleUrls: ['./opcion-login.component.scss']
})
export class OpcionLoginComponent implements OnInit {

  constructor(public router:Router) {
    if(sessionStorage.getItem("rut") != null || localStorage.getItem("rut")  != null){
      this.router.navigate(['home'])
    }else if(sessionStorage.getItem("rutpro") != null || localStorage.getItem("rutpro")  != null){
      this.router.navigate(['/profesional'])
    }
   }

  ngOnInit(): void {
  }

}

