import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cepRetorno } from '../models/cepRetorno';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor( private http: HttpClient ) { }

  /**
   * Executa Busca do CEP na API dos correios
   *
   * @param cep - cep a ser buscado, sem hífen (-)
   *
   * @returns Retorno API Correios
   *
   */
  buscaCep( cep: string): Observable<cepRetorno>
  {
    return this.http.get<cepRetorno>(`https://viacep.com.br/ws/${cep}/json`);
  }
}
