import { PagamentoService } from './../../../services/pagamento.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pagamento } from 'src/app/models/pagamento';

@Component({
  selector: 'app-cadastrar-pagamento',
  templateUrl: './cadastrar-pagamento.component.html',
  styleUrls: ['./cadastrar-pagamento.component.css'],
})
export class CadastrarPagamentoComponent {
  public descricao!: string;
  public valorPagamento!: number;
  public dataPagamento!: Date;
  public tipoPagamento!: string;

  constructor(
    private pagamentoService: PagamentoService,
    private router: Router
  ) {}

  public cadastrarPagamento() {
    let pagamento = new Pagamento(
      this.descricao,
      this.valorPagamento,
      this.dataPagamento,
      this.tipoPagamento
    );

    this.pagamentoService
      .cadastrarPagamento(pagamento)
      .subscribe((res: any) => {});
    this.router.navigate(['/home']);
  }
}
