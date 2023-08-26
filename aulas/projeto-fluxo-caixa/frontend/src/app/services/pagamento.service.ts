import { Injectable } from '@angular/core';
import { Pagamento } from '../models/pagamento';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { env } from '../enviroments/env';
import { PagamentoSaldoConsolidado } from './pagamentoSaldoConsolidado';

@Injectable({
  providedIn: 'root',
})
export class PagamentoService {
  private readonly baseUrl = env.baseUrl;

  constructor(private httpClient: HttpClient) {}

  public buscarPagamentos(): Observable<Pagamento[]> {
    return this.httpClient.get<Pagamento[]>(`${this.baseUrl}/pagamentos`);
  }

  public saldoConsolidado(dataReferencia: Date): Observable<PagamentoSaldoConsolidado> {
    return this.httpClient.get<PagamentoSaldoConsolidado>(`${this.baseUrl}/saldo-consolidado?data=${dataReferencia}`);
  }

  public cadastrarPagamento(pagamento: Pagamento): Observable<Pagamento>{
    return this.httpClient.post<Pagamento>(`${this.baseUrl}/pagamentos`, pagamento);
  }
}
