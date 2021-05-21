import { Component, OnInit } from '@angular/core';
import { gql } from '@apollo/client/core';
import {DocumentNode} from 'graphql';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  protected query!: string;
  protected data!: Observable<any>;

  public get Query(): string {
    return this.query;
  }

  public set Data(val: Observable<any>) {
    this.data = val;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
