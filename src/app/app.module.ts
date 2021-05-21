import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {USDRateComponent} from './usdrate/usdrate.component';
import {EURRateComponent} from './eurrate/eurrate.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    USDRateComponent,
    EURRateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GraphQLModule,
        HttpClientModule,
        SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
