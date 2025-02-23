import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductItemComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project0.1';
}
