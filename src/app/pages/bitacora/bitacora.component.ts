import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BitacoraService } from 'src/app/servives/bitacora.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css'],
  providers: [DatePipe] 
})
export class BitacoraComponent implements OnInit {
  title='Lista de Factura';

  facturas: any = [] ;
  constructor(private bitacoraSvc:BitacoraService, private datePipe: DatePipe) { }

  ngOnInit(){
    this.getAllCharacters();
  }

  getAllCharacters(){
    this.bitacoraSvc.obtenerInvoicesPorFechasConPaginacion().subscribe({
      next: (res:any) => {
        console.log("res",res)
        this.facturas = res.content
        console.log(" this.facturas", this.facturas)
      },
      error: (err:any) => {
        console.log(err);
      }
    });
  }

}
