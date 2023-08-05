import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from 'rxjs';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  buscarAnimais(): Observable<Animal[]> {
    return this.http
    .get<Animal[]>("http://localhost:8050/listar-animais")
    .pipe(
      map((res: Animal[]) => {
        return res;
      })
    )
  }

  buscarAnimaisResgatados(): Observable<Animal[]> {
    return this.http
    .get<Animal[]>("http://localhost:8050/listar-animais")
    .pipe(
      map((res: Animal[]) => {
        return res;
      })
    )
  }

  buscarAnimaisExoticos(): Observable<Animal[]> {
    return this.http
    .get<Animal[]>("http://localhost:8050/listar-animais")
    .pipe(
      map((res: Animal[]) => {
        return res;
      })
    )
  }

  addAnimal(animal: Animal): Observable<string> {
    return  this.http.post<string>("http://localhost:8050/adicionar-animal", animal);
  }
}
