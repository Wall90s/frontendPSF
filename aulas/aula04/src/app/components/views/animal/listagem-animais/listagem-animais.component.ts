import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-listagem-animais',
  templateUrl: './listagem-animais.component.html',
  styleUrls: ['./listagem-animais.component.css']
})
export class ListagemAnimaisComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>;
  public i: number = 0;
  public dateNow!: any;

  constructor(private animalService: AnimalService) { }

  ngOnDestroy(): void {
    console.log('I morreu')

    // this.unsubscribe.next();
  }

  public animais!: Animal[];

  ngOnInit(): void {
    // interval(5000).subscribe(() => console.log('Ze da manga'))
    // interval(1000).subscribe(() => {
    //   let date = new Date();

    //   this.dateNow = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    //   console.log(`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    // })

    // this.animalService.getAnimais().subscribe(() => console.log('Ze da manga'))


    // interval(2000).pipe(takeUntil(this.unsubscribe)).subscribe(() => console.log('Ze da manga'));
    console.log('To vivo')
    // this.animalService.getAnimais()
    //   .subscribe((response: Animal[]) => {
    //     this.animais = response
    //   });
  }

  getDados() {
    try {
      // realizar chamada http
    } catch (error) {
      console.log(error)
    }
  }
}
