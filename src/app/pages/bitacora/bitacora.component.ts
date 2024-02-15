import { Component, OnInit } from '@angular/core'
import { BitacoraService } from 'src/app/servives/bitacora.service'
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css'],
  providers: [DatePipe]
})
export class BitacoraComponent implements OnInit {

  title = 'Lista de Factura'
  totalPaginas: number = 0
  paginaActual: number = 0
  facturas: any = []

  constructor(private bitacoraSvc: BitacoraService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.getAllCharacters()
  }

  getAllCharacters(pagina?: number, tamanoPagina?: number, fechaInicial?: string, fechaFinal?: string) {
    
    console.log("fechaInicio getAllCharacters",fechaInicial)

    this.bitacoraSvc.obtenerInvoicesPorFechasConPaginacion(pagina, tamanoPagina, fechaInicial, fechaFinal).subscribe({
      next: (res: any) => {
        this.facturas = res.content
        this.totalPaginas = res.totalPages
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  onPageChanged(newPage: number): void {
    this.paginaActual = newPage
    this.getAllCharacters(newPage)
  }

  aplicarFiltro(event: { fechaInicio: string, fechaFin: string, tamanoPagina: number }) {
    const { fechaInicio, fechaFin, tamanoPagina } = event
    console.log("fechaInicio aplicarFiltro",fechaInicio)

    this.getAllCharacters(this.paginaActual, tamanoPagina, fechaInicio, fechaFin)
  }

}
