import { Component, OnInit } from '@angular/core';
import { ProductService} from '../services/product.service';
import { Product } from '../product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  categories: string[] = ['All','Electronics', 'Clothing','Books','Beauty'];
  selectedCategory: string | null = null;
  products: Product[] = [];

  constructor(private productService: ProductService,  private route: ActivatedRoute,
    private router: Router) {}

  // selectCategory(category: string): void {
  //   this.selectedCategory = category;
  //   this.products = this.productService.getProductsByCategory(category);
  // }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const category = params.get('categoryName');
      if (category && category !== 'All') {
        this.selectedCategory = category;
        this.products = this.productService.getProductsByCategory(category);
      } else {
        this.selectedCategory = 'All';
        this.products = this.productService.getAllProducts(); 
      }
    });
  }
  removeProduct(id: number): void {
    this.productService.removeProduct(id);
    this.products = this.products.filter(p => p.id !== id); 
  }
  

  navigateToCategory(category: string): void {
    if (category === 'All') {
      this.router.navigate(['/']); 
    } else {
      this.router.navigate(['/category', category]);
    }
  }
}
