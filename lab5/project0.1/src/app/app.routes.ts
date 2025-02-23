import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
export const routes: Routes = [
    { path: '', component: ProductListComponent }, 
    { path: 'category/:categoryName', component: ProductListComponent }


];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
