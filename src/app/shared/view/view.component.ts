import {AfterContentInit, AfterViewInit, Component, ContentChildren, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {QueryComponent} from '../query/query.component';
import {Apollo} from 'apollo-angular';
import {gql} from '@apollo/client/core';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements AfterContentInit {

  @ContentChildren(QueryComponent)
  children!: QueryList<QueryComponent>;

  constructor(private apollo: Apollo) { }

  ngAfterContentInit(): void {

    let combinedQuery = '{';
    let counter = 0;

    for (const child of this.children) {
      combinedQuery += `
        component${counter}: ${child.Query}
        `;

      counter++;
    }
    combinedQuery += `}`;

    const obs = this.apollo.query({
      query: gql(combinedQuery)
    });
    counter = 0;
    for (const child of this.children) {
      const index = `component${counter}`;
      child.Data = obs.pipe(map((data: any) => data['data'][index]));

      counter++;
    }

    /*
      child.Data = this.apollo.query({
        query: gql(child.Query)
      });
     */
  }
}
