import { Component, OnInit } from '@angular/core'
import { FacturasService } from 'src/app/servives/facturas.service'
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css'],
  providers: [DatePipe]
})
export class FacturasComponent implements OnInit {

  title = 'Lista de Factura'
  totalPaginas: number = 0
  paginaActual: number = 0
  facturas: any = []

  constructor(private bitacoraSvc: FacturasService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.getAllCharacters()
  }

  getAllCharacters(pagina?: number, tamanoPagina?: number, fechaInicial?: string, fechaFinal?: string) {
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
    this.getAllCharacters(this.paginaActual, tamanoPagina, fechaInicio, fechaFin)
  }

}
