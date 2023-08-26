import { PagamentoSaldoConsolidado } from './../../../services/pagamentoSaldoConsolidado';
import { PagamentoService } from './../../../services/pagamento.service';
import { Component, OnInit } from '@angular/core';
import { Pagamento } from 'src/app/models/pagamento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public pagamentos!: Pagamento[];
  public colunas: string[] = ['descricao', 'tipoPagamento', 'valorPagamento', 'dataPagamento'];
  public dataReferencia!: Date;
  public pagamentoSaldoConsolidado!: PagamentoSaldoConsolidado;

  constructor(private pagamentoService: PagamentoService) {}

  ngOnInit(): void {
    this.pagamentoService.buscarPagamentos().subscribe((response: Pagamento[]) => {
      this.pagamentos = response;
      console.log(response)
    });
  }

  public saldoConsolidado(){
    this.pagamentoService.saldoConsolidado(this.dataReferencia).subscribe((response: PagamentoSaldoConsolidado) => {
      console.log(this.dataReferencia)
      console.log(response)
    })
  }

}
