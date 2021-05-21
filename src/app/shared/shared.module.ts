import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryComponent } from './query/query.component';
import { ViewComponent } from './view/view.component';



@NgModule({
    declarations: [ QueryComponent, ViewComponent],
    exports: [
        ViewComponent,
      QueryComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
