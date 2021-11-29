import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-pro',
  templateUrl: './home-pro.component.html',
  styleUrls: ['./home-pro.component.scss']
})
export class HomeProComponent implements OnInit {

  constructor(public router:Router) {
    if(sessionStorage.getItem("rutpro") == null ){
      if(localStorage.getItem("rutpro") == null){
        this.router.navigate(['']);
      }
    }
  }

  ngOnInit(): void {
  }

}
