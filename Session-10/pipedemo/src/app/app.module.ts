import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Comp1Component, MylibComponent, MylibModule } from 'projects/mylib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { AllSpaceConversion } from './custompipes/AllSpaceConversion';
import { FormatText } from './custompipes/FormatText';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    FormatText,
    AllSpaceConversion
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomersModule,
    MylibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
