import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  public cliqueAqui() {
    alert('Usuario clicou')
  }

  public digitando(event: KeyboardEvent) {
    console.log((<HTMLInputElement>event.target).value)
  }

  public pressionouEnter() {
    alert('Enter pressionado!')
  }

  public passouMouse() {
    console.log('Usuario entrou com o mouse')
  }

  public tirouMouse() {
    console.log('Tirou mouse')
  }
}
