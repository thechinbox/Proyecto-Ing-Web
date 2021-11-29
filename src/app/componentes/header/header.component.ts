import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isCollapsed = true;
  public isCollapsed2 = true;
  
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    if(sessionStorage.getItem("rut")!= null){
      sessionStorage.removeItem("rut")
      this.router.navigate([""])
    }else{
      localStorage.removeItem("rut")
      this.router.navigate([""])
    }
  }
}
