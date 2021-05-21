import {AfterViewInit, Component, OnInit} from '@angular/core';
import {QueryComponent} from '../shared/query/query.component';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-eurrate',
  templateUrl: './eurrate.component.html',
  styleUrls: ['./eurrate.component.scss'],
  providers: [{ provide: QueryComponent, useExisting: EURRateComponent }]
})
export class EURRateComponent extends QueryComponent implements OnInit, AfterViewInit {

  public rates!: Observable<any>;
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.query = `
      rates(currency: "EUR") {
        rate
        name
      }
    `;
  }

  ngAfterViewInit(): void {
    this.rates = this.data.pipe(map((values: Array<any>) => values.slice(0, 20)));
  }
}
