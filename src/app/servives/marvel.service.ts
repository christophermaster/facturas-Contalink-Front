import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const URL_API = environment.facturas;
const KEY_PLUBLIC = environment.public_key;
const HASH = environment.hash;

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private readonly USERNAME = 'admin';
  private readonly PASSWORD = 'password';

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const credentials = btoa(`${this.USERNAME}:${this.PASSWORD}`);
    return new HttpHeaders().set('Authorization', `Basic ${credentials}`);
  }

  getCharacters(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get<any>(`${URL_API}/characters/1/100?ts=1&apikey=${KEY_PLUBLIC}&hash=${HASH}`, { headers }).pipe(map((data: any) => JSON.parse(data.data).data.results));
  }

  getCharacter(id: string): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(`${URL_API}/characters/${id}?ts=1&apikey=${KEY_PLUBLIC}&hash=${HASH}`, { headers }).pipe(map((data: any) => JSON.parse(data.data).data.results));
  }

}
