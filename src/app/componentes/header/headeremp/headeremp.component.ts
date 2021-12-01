import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headeremp',
  templateUrl: './headeremp.component.html',
  styleUrls: ['./headeremp.component.scss']
})
export class HeaderempComponent implements OnInit {
  public isMenuCollapsed = true;
  public isCollapsed2 = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    if(sessionStorage.getItem("rutempresa") != null){
      sessionStorage.removeItem("rutempresa")
    }else{
      localStorage.removeItem("rutempresa")
    }
  }
}
