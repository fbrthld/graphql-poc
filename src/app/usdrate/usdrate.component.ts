import { Component, OnInit } from '@angular/core';
import {QueryComponent} from '../shared/query/query.component';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-usdrate',
  templateUrl: './usdrate.component.html',
  styleUrls: ['./usdrate.component.scss'],
  providers: [{ provide: QueryComponent, useExisting: USDRateComponent }]
})
export class USDRateComponent extends QueryComponent implements OnInit {

  public rates!: Observable<any>;
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.query = `
      rates(currency: "USD") {
        currency
        rate
      }
    `;
  }


  ngAfterViewInit(): void {
    this.rates = this.data.pipe(map((values: Array<any>) => values.slice(0, 20)));
  }
}
