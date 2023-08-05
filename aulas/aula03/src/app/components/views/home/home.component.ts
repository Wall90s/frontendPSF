import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject, interval, switchMap, takeUntil } from 'rxjs';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animais.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent implements OnInit {

  constructor(private animalService: AnimalService) { }

  public animais!: Animal[];
  public animaisExoticos!: Animal[];


  ngOnInit(): void {
    this.animalService.buscarAnimais().subscribe((response: Animal[]) => {
        this.animais = response;
      });

      this.animalService.buscarAnimaisExoticos().subscribe((response: Animal[]) => {
        this.animaisExoticos = response;
      })
  }
}


