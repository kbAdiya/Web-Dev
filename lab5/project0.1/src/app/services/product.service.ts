import { Injectable } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1,
      image: 
        'https://resources.cdn-kaspi.kz/img/m/p/h16/hb1/86303746097182.jpg?format=gallery-medium',
      name: 'iPhone 15 Pro',
      category:'Electronics',
      description: 'Apple iPhone 15 256GB',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-chernyi-113137897/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfh--0MR2FxLrxcO07iFMTbm-OMNZ-nwDWzdSx_awzGxa0NOXF2PkbRoCiN4QAvD_BwE',
      
    },
    { 
      id:2,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      name: 'Samsung Galaxy S23',
      category:'Electronics',
      description: 'Samsung Galaxy S24 Ultra 256GB',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfh--0MR2FxLrxcO07iFMTbm-OMNZ-nwDWzdSx_awzGxa0NOXF2PkbRoCiN4QAvD_BwE',
      
    },
    {
      id:3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      name: 'MacBook Air',
      category:'Electronics',
      description: 'Apple MacBook Air 13.6"256GB SSD',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfh--0MR2FxLrxcO07iFMTbm-OMNZ-nwDWzdSx_awzGxa0NOXF2PkbRoCiN4QAvD_BwE'
      
    },
    {
      id:4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h71/hbe/82569351462942.jpg?format=gallery-medium',
      name: 'Samsung Galaxy Watch 6',
      category:'Electronics',
      description: 'Samsung Galaxy Watch 6 40mm',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch6-40-mm-zolotistyi-belyi-112368241/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfh--0MR2FxLrxcO07iFMTbm-OMNZ-nwDWzdSx_awzGxa0NOXF2PkbRoCiN4QAvD_BwE'
    }, 
    {
      id:5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'phone Apple iPhone 13 ',
      category:'Electronics',
      description: 'Smartphone Apple iPhone 13 128Gb black',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      id:6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h4d/86067418333214.jpg?format=gallery-medium',
      name: 'Pleated skirt',
      category:'Clothing',
      description: 'Pleated skirt white',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/plissirovannaja-jubka-202842-belyi-50-119613445/?c=750000000'
    },
    {
      id:7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb4/h96/85812013531166.jpg?format=gallery-medium',
      name: 'Brown loose-fitting jacket',
      category:'Clothing',
      description: 'Brown loose-fitting jacket',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/pidzhak-978513-korichnevyi-46-118644284/?c=750000000'
    },
    {
      id:8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/h2f/86204151595038.jpg?format=gallery-medium',
      name: 'Relaxed jacket black',
      category:'Clothing',
      description: 'Relaxed jacket black',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/pidzhak-978513-chernyi-44-120099702/?c=750000000'
    },
    {
      id:9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p5b/pfc/3654687.jpeg?format=gallery-medium',
      name: 'Leather skirt',
      category:'Clothing',
      description: 'Leather skirt, straight skirt, pencil skirt black',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/kozhanaja-jubka-prjamaja-jubka-jubka-karandash-16271351-602273496-chernyi-48-128654847/?c=750000000'
    },
    {
      id:10,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3a/p6a/18290315.jpeg?format=gallery-medium',
      name: 'Skims T-shirt black',
      category:'Clothing',
      description: 'Skims T-shirt black',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/futbolka-skims-031124-15-chernyi-44-132912107/?c=750000000'
    },
    {
      id:11,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/h9a/86244289314846.png?format=gallery-medium',
      name: 'Atomic Habits',
      category:'Books',
      description: 'Book Clear D.: Atomic Habits',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/klir-d-atomnye-privychki-117680550/?c=750000000'
    },
    {
      id:12,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h28/hc3/67252819197982.jpg?format=gallery-medium',
      name: 'Kemel Adam',
      category:'Books',
      description: 'Book of Zholdybayuly K.: Kemel Adam',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/zholdybai-ly-kemel-adam-103430816/?c=750000000'
    },
    {
      id:13,
      image: 'https://simg.marwin.kz/media/catalog/product/cache/8d1771fdd19ec2393e47701ba45e606d/c/o/cover1_74_20.jpg',
      name: 'Book Granin D.A.',
      category:'Books',
      description: 'Book Granin D.A., Adamovich A.M.: Siege book. Exclusive: Russian classics',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/granin-d-a-adamovich-a-m-blokadnaja-kniga-ekskljuziv-russkaja-klassika-110456632/?c=750000000'
    },
    {
      id:14,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8a/h39/63814556614686.jpg?format=gallery-medium',
      name: 'Book by Tolstoy L.N.: War and Peace',
      category:'Books',
      description: 'Book by Tolstoy L.N.: War and Peace. Set of 2 books',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/tolstoi-l-n-voina-i-mir-komplekt-iz-2-h-knig-26003301/?c=750000000'
    },
    {
      id:15,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf6/h42/63912079032350.jpg?format=gallery-medium',
      name: 'Dumas A.: The Count of Monte Cristo.',
      category:'Books',
      description: 'Book by Dumas A.: The Count of Monte Cristo. 2 books.',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/djuma-a-graf-monte-kristo-2-knigi--100500965/?c=750000000'
    },
    {
      id:16,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3c/h2c/86609939333150.jpg?format=gallery-medium',
      name: 'AXIS-Y serum',
      category:'Beauty',
      description: 'AXIS-Y Dark Spot Correcting Glow serum for face 50 ml',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/axis-y-syvorotka-dark-spot-correcting-glow-dlja-litsa-50-ml-104067981/?c=750000000'
    },
    {
      id:17,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/86726530400286.jpg?format=gallery-medium',
      name: 'Dr. Althea cream',
      category:'Beauty',
      description: 'Dr. Althea cream 345 Relief for face 50 ml',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/dr-althea-krem-345-relief-dlja-litsa-50-ml-115616909/?c=750000000'
    },
    {
      id:18,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4d/haf/86698446520350.jpg?format=gallery-medium',
      name: 'Eveline Cosmetics',
      category:'Beauty',
      description: 'Eveline Cosmetics cream Nature\'s Recipes golden wheat for face 125 ml',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/eveline-cosmetics-krem-retsepty-prirody-zolotaja-pshenitsa-dlja-litsa-125-ml-101041863/?c=750000000'
    },
    {
      id:19,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc7/p3f/1607750.jpg?format=gallery-medium',
      name: 'SKIN&LAB Vitamin C Brightening serum',
      category:'Beauty',
      description: 'SKIN&LAB Vitamin C Brightening serum for face 30 ml',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/skin-lab-syvorotka-vitamin-c-brightening-dlja-litsa-30-ml-104829563/?c=750000000'
    },
    {
      id:20,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/hcd/86663479197726.jpg?format=gallery-medium',
      name: 'Round Lab Birch Juice Moisturizing cream',
      category:'Beauty',
      description: 'Round Lab Birch Juice Moisturizing cream SPF50 for face 50 ml',
      rating: 0,
      likes:0,
      link: 'https://kaspi.kz/shop/p/round-lab-krem-birch-juice-moisturizing-spf50-dlja-litsa-50-ml-105263927/?c=750000000'
    },
    
    
    
    
    
    
  ]
  constructor() { }
  getAllProducts(): Product[] {
    return this.products; 
  }
  getProductsByCategory(category: string): Product[] {
    return this.products.filter(product => product.category === category);
  }

  // likeProduct(id: number): void {
  //   const product = this.products.find(p => p.id === id);
  //   if (product) {
  //     product.likes++;
  //   }
  // }
  likeProduct(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product && product.likes < 10) {
      product.likes++;
      product.rating = this.calculateRating(product.likes);
    }
  }
  
  calculateRating(likes: number): number {
    if (likes === 10) return 5;
    if (likes === 9) return 4.9;
    if (likes >= 7) return 4.5;
    if (likes >= 5) return 4;
    if (likes >= 3) return 3;
    return 2;
  }
  removeProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
}
