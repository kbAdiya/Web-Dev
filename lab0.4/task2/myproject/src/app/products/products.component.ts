import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Products } from '../products';
export interface Products {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
}
@Component({
  selector: 'app-products',
  imports: [CommonModule],
  template: `
    <div class="products-container">
    <div *ngFor="let product of products" class="product-card">
    <div class="product-image">
      <img [src]="product.image" alt="{{ product.name }}">
    </div>
    <div class="product-info">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p class="rating">✨ {{ product.rating }}</p>
      <a [href]="product.link" target="_blank" class="view-btn">View on Kaspi</a>

      <div class="share-buttons">
        <button (click)="shareProduct(product, 'whatsapp')" class="whatsapp-btn">Share on WhatsApp</button>
        <button (click)="shareProduct(product, 'telegram')" class="telegram-btn">Share on Telegram</button>
      </div>
    </div>
  </div>
</div>




  `,
  styleUrls: ['./products.component.css']

})
export class ProductsComponent {
  products: Products[] = [
    {
      image: 
        'https://resources.cdn-kaspi.kz/img/m/p/h16/hb1/86303746097182.jpg?format=gallery-medium',
      name: 'iPhone 15 Pro',
      description: 'Apple iPhone 15 256GB',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-chernyi-113137897/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfh--0MR2FxLrxcO07iFMTbm-OMNZ-nwDWzdSx_awzGxa0NOXF2PkbRoCiN4QAvD_BwE'
    },
    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      name: 'Samsung Galaxy S23',
      description: 'Samsung Galaxy S24 Ultra 256GB',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfh--0MR2FxLrxcO07iFMTbm-OMNZ-nwDWzdSx_awzGxa0NOXF2PkbRoCiN4QAvD_BwE'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      name: 'MacBook Air',
      description: 'Apple MacBook Air 13.6"256GB SSD',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfh--0MR2FxLrxcO07iFMTbm-OMNZ-nwDWzdSx_awzGxa0NOXF2PkbRoCiN4QAvD_BwE'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h71/hbe/82569351462942.jpg?format=gallery-medium',
      name: 'Samsung Galaxy Watch 6',
      description: 'Samsung Galaxy Watch 6 40mm',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch6-40-mm-zolotistyi-belyi-112368241/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfh--0MR2FxLrxcO07iFMTbm-OMNZ-nwDWzdSx_awzGxa0NOXF2PkbRoCiN4QAvD_BwE'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
      name: 'Apple Watch',
      description: 'Apple Watch SE GPS Gen.2 2024 S/M 40 мм',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfh--0MR2FxLrxcO07iFMTbm-OMNZ-nwDWzdSx_awzGxa0NOXF2PkbRoCiN4QAvD_BwE'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe5/p5f/1647298.png?format=gallery-medium',
      name: ' Samsung Tab S10 Ultra ',
      description: 'Samsung Tab S10 Ultra 14.6 дюйм 12 Гб/256 Гб',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-tab-s10-ultra-14-6-djuim-12-gb-256-gb-seryi-128152132/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfh--0MR2FxLrxcO07iFMTbm-OMNZ-nwDWzdSx_awzGxa0NOXF2PkbRoCiN4QAvD_BwE'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdf/haf/63603321208862.jpg?format=gallery-medium',
      name: 'Google Pixel 7 Pro',
      description: 'Google Pixel 7 Pro 12 ГБ/256 ГБ',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-256-gb-belyi-107066176/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfh--0MR2FxLrxcO07iFMTbm-OMNZ-nwDWzdSx_awzGxa0NOXF2PkbRoCiN4QAvD_BwE'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h69/hb0/85987722395678.jpg?format=gallery-medium',
      name: 'Lenovo Legion 5 Pro',
      description: 'Lenovo Legion 5 16" / 32 Гб / SSD 1000 Гб / Win 11 Pro / 16IRX9 / 83DG006WRK',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/lenovo-legion-5-16-32-gb-ssd-1000-gb-win-11-pro-16irx9-83dg006wrk-119270896/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfh--0MR2FxLrxcO07iFMTbm-OMNZ-nwDWzdSx_awzGxa0NOXF2PkbRoCiN4QAvD_BwE'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha6/h82/69586957697054.jpg?format=gallery-medium',
      name: ' Xiaomi Redmi 12C ',
      description: ' Xiaomi Redmi 12C 4 ГБ/128 ГБ',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-12c-4-gb-128-gb-seryi-109149311/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfh--0MR2FxLrxcO07iFMTbm-OMNZ-nwDWzdSx_awzGxa0NOXF2PkbRoCiN4QAvD_BwE'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      name: 'iPhone 16 Pro Max',
      description: 'Apple iPhone 16 Pro Max 256Gb ',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    }

   
  ];

  shareProduct(product: Products, platform: string) {
    const message = encodeURIComponent(`Check out this product: ${product.name} - ${product.link}`);

    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
    } else if (platform === 'telegram') {
      window.open(`https://t.me/share/url?url=${product.link}&text=${message}`, '_blank');
    }
  }
}
