import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animais.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {

  public animalForm!: FormGroup;

  public nome!: string;
  public raca!: string;
  public peso!: number;

  constructor(private animalService: AnimalService,
              private router: Router) { }

  // ngOnInit(): void {
  //   this.animalForm = new FormGroup({
  //     nome: new FormControl('', Validators.required),
  //     raca: new FormControl('', Validators.required),
  //     peso: new FormControl('', [Validators.required, Validators.minLength(1)])
  //   });
  // }

  ngOnInit(): void {
  }

  // adicionarAnimal() {
  //   console.log(this.animalForm.value.nome)
  //   let animal = new Animal(this.animalForm.value.nome,
  //                           this.animalForm.value.raca,
  //                           this.animalForm.value.peso);

  //   this.animalService
  //     .addAnimal(animal)
  //     .subscribe((res) => {
  //     console.log(res)
  //   });
  //   this.router.navigate(['/'])
  // }

  adicionarAnimal() {
    let animal = new Animal(this.nome, this.raca, this.peso);

    this.animalService
      .addAnimal(animal)
      .subscribe((res) => {
      console.log(res)
    });
    this.router.navigate(['/'])
  }

}
