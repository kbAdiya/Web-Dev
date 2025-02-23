import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Product } from '../product';
@Component({
  selector: 'app-product-item',
  imports: [CommonModule, ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();
  constructor(private productService: ProductService) {}

  likeProduct(): void {
    this.productService.likeProduct(this.product.id);
  }

  // removeProduct(): void {
  //   this.productService.removeProduct(this.product.id);
  // }
  removeProduct(): void {
    this.remove.emit(this.product.id); 
  }
   
  shareProduct(platform: string): void {
    const message = encodeURIComponent(`Check out this product: ${this.product.name} - ${this.product.link}`);
    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
    } else if (platform === 'telegram') {
      window.open(`https://t.me/share/url?url=${this.product.link}&text=${message}`, '_blank');
    }
  }

 
}
