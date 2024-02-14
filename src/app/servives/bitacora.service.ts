import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const URL_API = environment.facturas;


@Injectable({
  providedIn: 'root'
})
export class BitacoraService {


  private readonly USERNAME = 'admin';
  private readonly PASSWORD = 'password';

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const credentials = btoa(`${this.USERNAME}:${this.PASSWORD}`);
    return new HttpHeaders().set('Authorization', `Basic ${credentials}`);
  }
  
  obtenerInvoicesPorFechasConPaginacion(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(`${URL_API}/facturas-paginada`, { headers }).pipe(map((data: any) => data));
  }

}
