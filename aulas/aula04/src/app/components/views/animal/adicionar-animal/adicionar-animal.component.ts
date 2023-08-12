import { AnimalService } from 'src/app/services/animal.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adicionar-animal',
  templateUrl: './adicionar-animal.component.html',
  styleUrls: ['./adicionar-animal.component.css']
})
export class AdicionarAnimalComponent implements OnInit, OnDestroy {
  public nome!: string;
  public raca!: string;
  public peso!: number;

  constructor(private animalService: AnimalService, private router: Router) {  }


  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.x().then(res => console.log(res)).catch((err) => {
      console.error(err);
    })

    // this.x().then(res => console.log(res)).catch((err) => {
    //   console.error(err);
    // })

    this.y().subscribe((res) => {
      console.log(res)
    })
  }

  public x(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setInterval(() => {
        resolve('Deu certoooooooo')
        resolve('Deu certo')
      }, 1000)

      setInterval(() => {
        reject('Deu erroooooo')
      }, 1000)
    })
  }

  public y(): Observable<string> {
    return new Observable<string>(subscriber => {
      subscriber.next('deu certim man')

      setTimeout(() => {
        subscriber.next('deu certo meoo')
      }, 3000);
    })
  }

  public adicionarAnimal() {
    let animal = new Animal(this.nome,
                            this.raca,
                            this.peso);

    this.animalService.adicionarAnimal(animal)
      .subscribe((response) => {
        console.log(response);
      });

    this.router.navigate(["/"])
  }


}
