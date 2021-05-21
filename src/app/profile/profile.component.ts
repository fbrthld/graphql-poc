import { Component, OnInit } from '@angular/core';
import { gql } from '@apollo/client/core';
import {QueryComponent} from '../shared/query/query.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [{ provide: QueryComponent, useExisting: ProfileComponent }]
})
  export class ProfileComponent extends QueryComponent implements OnInit {

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
}
