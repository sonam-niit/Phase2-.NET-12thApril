import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { CustomerformComponent } from './customerform/customerform.component';



@NgModule({
  declarations: [
    CustomerComponent,
    CustomerlistComponent,
    CustomerdetailComponent,
    CustomerformComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CustomerlistComponent,]
})
export class CustomersModule { }
