import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChilaAComponent } from './chila-a/chila-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterComponent } from './register/register.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"list",component:ListComponent},
  {path:"userdata",component:UserlistComponent},
  {path:"about",component:AboutComponent,children:[
    {path:'',redirectTo:"child-a",pathMatch:"full"},
    {path:'child-a',component:ChilaAComponent},
    {path:'child-b',component:ChildBComponent}
  ]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
 // {path:"**",component:PageNotFoundComponent}, //wildcard route
  {path:"productdetail/:id",component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
