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

  title = 'Lista de Factura';
  totalPaginas: number = 0;
  paginaActual: number = 1;
  facturas: any = [];

  constructor(private bitacoraSvc: BitacoraService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.getAllCharacters();
  }

  getAllCharacters(pagina?: number) {
    this.bitacoraSvc.obtenerInvoicesPorFechasConPaginacion().subscribe({
      next: (res: any) => {
        this.facturas = res.content
        this.totalPaginas = res.totalPages;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  onPageChanged(newPage: number): void {
    this.paginaActual = newPage;
    this.getAllCharacters(newPage);
    // Puedes agregar más lógica aquí según tus necesidades
  }

}
