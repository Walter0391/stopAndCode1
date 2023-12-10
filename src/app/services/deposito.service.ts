import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Denaro, NuovoDenaroDto } from '../models/deposito-contatne';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepositoService {
  constructor(private http: HttpClient) {}

  getArticoli(): Observable<Denaro[]> {
    return this.http.get<Denaro[]>(`${environment.JSON_SERVER_BASE_URL}/data`);
  }

  nuovoDenaro(model: NuovoDenaroDto): Observable<Denaro> {
    return this.http.post<Denaro>(
      `${environment.JSON_SERVER_BASE_URL}/data`,
      model
    );
  }
}
