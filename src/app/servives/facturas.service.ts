import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const URL_API = environment.facturas;

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  private readonly USERNAME = environment.user;
  private readonly PASSWORD = environment.password;

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const credentials = btoa(`${this.USERNAME}:${this.PASSWORD}`);
    return new HttpHeaders().set('Authorization', `Basic ${credentials}`);
  }

  obtenerInvoicesPorFechasConPaginacion(pagina: number = 0, tamanoPagina: number = 10, fechaInicial?: string, fechaFinal?: string): Observable<any> {
    const headers = this.getAuthHeaders();
    let params = new HttpParams()
      .set('pagina', pagina.toString())
      .set('tamanoPagina', tamanoPagina.toString())
      if (fechaInicial) {
        console.log("entra",params)

        params = params.set('fechaInicial', fechaInicial);
      }
      
      if (fechaFinal) {
        params =params.set('fechaFinal', fechaFinal);
      }

      console.log("params",params)
    return this.http.get(`${URL_API}/facturas-paginada`, { headers, params }).pipe(map((data: any) => data));
  }

}
