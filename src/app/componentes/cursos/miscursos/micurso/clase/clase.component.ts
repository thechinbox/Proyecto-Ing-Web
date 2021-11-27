import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { curso } from 'src/app/interfaces/curso';
import { progreso } from 'src/app/interfaces/progreso';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.scss']
})
export class ClaseComponent implements OnInit,OnChanges {
  @Input() clase_actual:any;
  @Output() checkvid:EventEmitter<String> = new EventEmitter();
  status:boolean;
  video:any;

  constructor() {
    this.status=false;
    
  }

  ngOnInit(): void {  
    this.video = document.querySelector("video");
    this.video.addEventListener('ended', (e:any) => {
      if(this.video.played.end(0) - this.video.played.start(0) === this.video.duration) {
        this.checkvid.emit("ok");
      }
    }) 
    
  }


  ngOnChanges(changes:SimpleChanges):void{

  }
}
