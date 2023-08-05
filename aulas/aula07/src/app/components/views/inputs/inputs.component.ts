import { Component } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  public email!: string;

  public limparCampo() {
    this.email = ''
  }
}
