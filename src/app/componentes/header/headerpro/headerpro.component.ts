import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerpro',
  templateUrl: './headerpro.component.html',
  styleUrls: ['./headerpro.component.scss']
})
export class HeaderproComponent implements OnInit {
  isMenuCollapsed = false;
  isCollapsed2 = true;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    if(sessionStorage.getItem("rutpro") != null){
      sessionStorage.removeItem("rutpro")
    }else{
      localStorage.removeItem("rutpro")
    }
    this.router.navigate(['/'])
  }
}
