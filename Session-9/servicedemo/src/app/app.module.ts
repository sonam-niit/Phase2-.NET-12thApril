import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorChangeDirective } from './customDirective';
import { HighLightDirective } from './Highlight';
import { CourcesComponent } from './cources/cources.component';
import { SwitchdemoComponent } from './switchdemo/switchdemo.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    ColorChangeDirective,
    HighLightDirective,
    CourcesComponent,
    SwitchdemoComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
