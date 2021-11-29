import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerpro',
  templateUrl: './headerpro.component.html',
  styleUrls: ['./headerpro.component.scss']
})
export class HeaderproComponent implements OnInit {
  isMenuCollapsed = false;
  isCollapsed2 = true;
  constructor() { }

  ngOnInit(): void {
  }

}
