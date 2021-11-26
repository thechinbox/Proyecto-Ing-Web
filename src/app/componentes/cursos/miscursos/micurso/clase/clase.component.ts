import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { curso } from 'src/app/interfaces/curso';
import { progreso } from 'src/app/interfaces/progreso';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.scss']
})
export class ClaseComponent implements OnInit,OnChanges {
  @Input() clase_actual:any;
  constructor() {}

  ngOnInit(): void {  
  }
  ngOnChanges(changes:SimpleChanges):void{
    console.log(changes["clase_actual"]);
    
  }
}
