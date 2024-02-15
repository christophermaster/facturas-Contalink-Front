import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import * as moment from 'moment'

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  fechaHoraInicio: string = ""
  fechaHoraFin: string = ""
  numeroElemento: Array<number> = [20, 30, 40]
  selectTotalElement: number = 10

  @Output() filtroAplicado: EventEmitter<{
    fechaInicio: string
    fechaFin: string
    tamanoPagina: number
  }> = new EventEmitter()

  constructor() { }
  ngOnInit(): void {
  }

  aplicarFiltro() {
    let fechaInicio: string = ""
    let fechaFin: string = ""
    const tamanoPagina = this.selectTotalElement
    const formato = 'yyyy-MM-DD HH:mm:ss'

    if (this.fechaHoraInicio) {
      const fI: moment.Moment = moment(this.fechaHoraInicio)
      fechaInicio = fI.format(formato)
    }
    if (this.fechaHoraFin) {
      const fF: moment.Moment = moment(this.fechaHoraFin)
      fechaFin = fF.format(formato)
    }

    this.filtroAplicado.emit({ fechaInicio, fechaFin, tamanoPagina })
  }

}
