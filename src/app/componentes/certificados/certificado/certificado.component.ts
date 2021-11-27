import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { certificado } from 'src/app/interfaces/certificado';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.scss']
})
export class CertificadoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CertificadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: certificado
  ) { }

  ngOnInit(): void {
  }

  exportAsPDF(nombre:string)
  {
    let data:any = document.getElementById("certificado");  
    html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('l', 'cm', 'letter');
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);  
      pdf.save('Certificado'+ nombre +'.pdf');   
    }); 
  }
}
