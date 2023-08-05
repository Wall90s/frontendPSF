import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-oninit-ondestroy',
  templateUrl: './oninit-ondestroy.component.html',
  styleUrls: ['./oninit-ondestroy.component.css']
})
export class OninitOndestroyComponent implements OnInit, OnDestroy {

  public texto!: string;
  public text: string = "abc";

  constructor() { }

  ngOnInit(): void {
    console.log('To vivo')
  }

  ngOnDestroy(): void {
    console.log('I morreu')
  }

  public alerta() {
    alert('Isso é um alerta')
  }

  public digitando(event: KeyboardEvent) {
    this.texto = ((<HTMLInputElement>event.target).value)
  }

  public passouMouse() {
    console.log('Ze da manga')
  }

  public tirouMouse() {
    console.log('Danonao grosso')
  }

  public pegarValorAoclicarEnter(event: any) {
    alert(event)
  }
}
