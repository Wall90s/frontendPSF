import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  public date!: string;

  ngOnInit(): void {

    interval(1000).subscribe(() => {

      this.observable("Ciclano")
        .subscribe((response: any) => {
          this.date = response
          console.log(response);
        })
    })
  }

  public observable(nome: string): Observable<string> {
    return new Observable<string>((subscriber) => {
      let date = new Date();

      subscriber.next(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    });
  }
}
