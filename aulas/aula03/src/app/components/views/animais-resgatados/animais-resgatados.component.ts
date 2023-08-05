import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animais.service';

@Component({
  selector: 'app-animais-resgatados',
  templateUrl: './animais-resgatados.component.html',
  styleUrls: ['./animais-resgatados.component.css']
})
export class AnimaisResgatadosComponent implements OnInit {

  constructor(private animalService: AnimalService) { }

  public animaisResgatados!: Animal[]

  ngOnInit(): void {
    this.animalService.buscarAnimaisResgatados()
      .subscribe((response: Animal[]) => {
        this.animaisResgatados = response;
      })
  }

}
