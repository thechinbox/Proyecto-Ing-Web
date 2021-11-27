import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { certificado } from 'src/app/interfaces/certificado';
import { CertificadosService } from 'src/app/servicios/certificados/certificados.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CertificadoComponent } from './certificado/certificado.component';



@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.scss']
})
export class CertificadosComponent implements OnInit {
  certificados:Array<certificado>;
  height:number;

  constructor(public router:Router, private http:CertificadosService, public dialog: MatDialog) {
    this.certificados = new Array();
    this.height = screen.height;
     
  }

  ngOnInit(): void {
    if(sessionStorage.getItem("rut") == null ){
      if(localStorage.getItem("rut") == null){
        this.router.navigate(['']);
      }else{
        this.http.GETCERT(localStorage.getItem("rut")).subscribe(datos=>{
          this.certificados = datos;
          console.log(this.certificados);
        })       
      }
    }else{
      this.http.GETCERT(sessionStorage.getItem("rut")).subscribe(datos=>{        
        this.certificados = datos;
        console.log(this.certificados);
      }) 
    } 

  }

  getheight():number{
    this.height = screen.height/2;
    return this.height;
  }
  openDialog(cert:certificado){
    const dialogRef = this.dialog.open(CertificadoComponent, {
      height: '60%',
      width: '60%',
      data: cert
    });
    dialogRef.updatePosition({ top: '5vh' });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

}
