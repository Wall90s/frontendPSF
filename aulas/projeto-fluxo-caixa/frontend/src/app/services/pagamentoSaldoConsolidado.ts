import { Pagamento } from './../models/pagamento';
export interface PagamentoSaldoConsolidado {
  lucroDoDia: number;
  pagamentos: Pagamento[];
}

