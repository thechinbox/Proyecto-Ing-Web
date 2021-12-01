import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headeremp',
  templateUrl: './headeremp.component.html',
  styleUrls: ['./headeremp.component.scss']
})
export class HeaderempComponent implements OnInit {
  public isMenuCollapsed = true;
  public isCollapsed2 = true;
  
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    if(sessionStorage.getItem("rutempresa") != null){
      sessionStorage.removeItem("rutempresa")
      this.router.navigate([''])
    }else{
      localStorage.removeItem("rutempresa")
      this.router.navigate([''])
    }
  }
}
