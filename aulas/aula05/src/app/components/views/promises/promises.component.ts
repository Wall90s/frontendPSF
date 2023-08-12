import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  @Input() public texto!: string;

  ngOnInit(): void {
    this.promise('Gilson')
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  public promise(nome: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (nome == "Fulano") {
        resolve('Deu certo')
      } else {
        reject('Deu erro');
      }
    });
  }

}
