import { Component } from '@angular/core';

export class Pessoa {
  public nome!: string;
  public email!: string;
}

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent {

  public nome!: string;
  public email!: string;

}
