import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({ providedIn: 'root' })

export class ProductService {
    readonly categories : Category[] = [
        { id: 1, name: "Smartphones" },
        { id: 2, name: "Tablets" },
        { id: 3, name: "Laptops" },
        { id: 4, name: "TVs" },
    ];

    private products = signal<Product[]>([
        {
            id: 1,
            categoryId: 1,
            likes: 0,
            name: "IPhone 17 256Gb",
            description: "Apple iPhone 17 256Gb NanoSIM+eSIM",
            price: '594 888',
            ratingCount: 777,
            rating: 4.5,
            image: '1.jpg',
            images: [
              '1.jpg',
              '2.jpg',
              '3.jpg',
              '4.jpg',
              '5.jpg'
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-nanosim-esim-chernyi-145466647/'
        },
        
        {
            id: 2,
            categoryId: 1,
            likes: 0,
            name: "IPhone 17 Pro 256Gb",
            description: "Apple iPhone 17 Pro 256Gb NanoSIM+eSIM",
            price: '839 301',
            ratingCount: 888,
            rating: 4.3,
            image: '6.jpg',
            images: [
                '6.jpg',
                '7.jpg',
                '8.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-oranzhevyi-145467625/'
        },
    
        {
            id: 3,
            categoryId: 1,
            likes: 0,
            name: "IPhone 17 Pro Max 256Gb",
            description: "Apple iPhone 17 Pro Max 256Gb NanoSIM+eSIM",
            price: '878 551',
            ratingCount: 999,
            rating: 4.2,
            image: '9.jpg',
            images: [
                '9.jpg',
                '10.jpg',
                '11.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-nanosim-esim-oranzhevyi-145468241/'
        },
    
        {
            id: 4,
            categoryId: 1,
            likes: 0,
            name: "IPhone 16 Pro 128Gb",
            description: "Apple iPhone 16 Pro 128Gb NanoSIM+eSIM",
            price: '644 000',
            ratingCount: 999,
            rating: 4.8,
            image: '12.jpg',
            images: [
                '12.jpg',
                '13.jpg',
                '14.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-nanosim-esim-zolotistyi-123888919/'
        },
    
        {
            id: 5,
            categoryId: 1,
            likes: 0,
            name: "IPhone 16 Pro Max 128Gb",
            description: "Apple iPhone 16 Pro 128Gb NanoSIM+eSIM",
            price: '727 500',
            ratingCount: 999,
            rating: 4.9,
            image: '12.jpg',
            images: [
                '12.jpg',
                '13.jpg',
                '14.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-nanosim-esim-zolotistyi-123890547/'
        },

        {
            id: 6,
            categoryId: 2,
            likes: 0,
            name: "Apple iPad Air 11 2024",
            description: "Apple iPad Air 11 2024 Wi-Fi 11 дюйм 8 Гб/256 Гб",
            price: '385 498',
            ratingCount: 999,
            rating: 4.9,
            image: '15.jpg',
            images: [
                '15.jpg',
                '17.jpg',
                '18.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/'
        },

        {
            id: 7,
            categoryId: 2,
            likes: 0,
            name: "Apple iPad Air 12.9 2022",
            description: "Apple iPad Pro 12.9 2022 Wi-Fi 12.9 дюйм 8 Гб/256 Гб",
            price: '670 000',
            ratingCount: 999,
            rating: 4.9,
            image: '15.jpg',
            images: [
                '15.jpg',
                '17.jpg',
                '18.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/'
        },

        {
            id: 8,
            categoryId: 2,
            likes: 0,
            name: "Apple iPad Air 12.9 2022",
            description: "Apple iPad Pro 12.9 2022 Wi-Fi 12.9 дюйм 8 Гб/256 Гб",
            price: '670 000',
            ratingCount: 999,
            rating: 4.9,
            image: '15.jpg',
            images: [
                '15.jpg',
                '17.jpg',
                '18.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/'
        },

        {
            id: 9,
            categoryId: 2,
            likes: 0,
            name: "Apple iPad Air 12.9 2022",
            description: "Apple iPad Pro 12.9 2022 Wi-Fi 12.9 дюйм 8 Гб/256 Гб",
            price: '670 000',
            ratingCount: 999,
            rating: 4.9,
            image: '15.jpg',
            images: [
                '15.jpg',
                '17.jpg',
                '18.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/'
        },
        
        {
            id: 10,
            categoryId: 3,
            likes: 0,
            name: "Apple MacBook Air 13 2020 13.3",
            description: "Apple MacBook Air 13 2020 13.3 / 8 Гб / SSD 256 Гб / macOS /",
            price: '439 325',
            ratingCount: 999,
            rating: 4.9,
            image: '20.jpg',
            images: [
                '20.jpg',
                '19.jpg',
                '21.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/'
        },

        
        {
            id: 11,
            categoryId: 3,
            likes: 0,
            name: "Apple MacBook Air 13 2020 13.3",
            description: "Apple MacBook Air 13 2020 13.3 / 8 Гб / SSD 256 Гб / macOS /",
            price: '439 325',
            ratingCount: 999,
            rating: 4.9,
            image: '19.jpg',
            images: [
                '19.jpg',
                '20.jpg',
                '21.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/'
        },

        
        {
            id: 12,
            categoryId: 3,
            likes: 0,
            name: "Apple MacBook Air 13 2020 13.3",
            description: "Apple MacBook Air 13 2020 13.3 / 8 Гб / SSD 256 Гб / macOS /",
            price: '439 325',
            ratingCount: 999,
            rating: 4.9,
            image: '19.jpg',
            images: [
                '19.jpg',
                '20.jpg',
                '21.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/'
        },
        
        {
            id: 13,
            categoryId: 3,
            likes: 0,
            name: "Apple MacBook Air 13 2020 13.3",
            description: "Apple MacBook Air 13 2020 13.3 / 8 Гб / SSD 256 Гб / macOS /",
            price: '439 325',
            ratingCount: 999,
            rating: 4.9,
            image: '21.jpg',
            images: [
                '21.jpg',
                '19.jpg',
                '21.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/'
        },
        
        {
            id: 14,
            categoryId: 3,
            likes: 0,
            name: "Apple MacBook Air 13 2020 13.3",
            description: "Apple MacBook Air 13 2020 13.3 / 8 Гб / SSD 256 Гб / macOS /",
            price: '439 325',
            ratingCount: 999,
            rating: 4.9,
            image: '20.jpg',
            images: [
                '20.jpg',
                '19.jpg',
                '21.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/'
        },
        
        {
            id: 15,
            categoryId: 4,
            likes: 0,
            name: "LG 43LM5772PLA",
            description: "LG 43LM5772PLA 109 см черный",
            price: '174 990',
            ratingCount: 999,
            rating: 4.9,
            image: '22.jpg',
            images: [
                '22.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/'
        },
        
        {
            id: 16,
            categoryId: 4,
            likes: 0,
            name: "LG 43LM5772PLA",
            description: "Samsung UE55DU7100UXCE 140 см черный",
            price: '278 590',
            ratingCount: 999,
            rating: 4.9,
            image: '23.jpg',
            images: [
                '23.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/'
        },
        
        
        {
            id: 17,
            categoryId: 4,
            likes: 0,
            name: "LG 43LM5772PLA",
            description: "LG 43LM5772PLA 109 см черный",
            price: '174 990',
            ratingCount: 999,
            rating: 4.9,
            image: '22.jpg',
            images: [
                '22.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/'
        },
        
        {
            id: 18,
            categoryId: 4,
            likes: 0,
            name: "LG 43LM5772PLA",
            description: "Samsung UE55DU7100UXCE 140 см черный",
            price: '278 590',
            ratingCount: 999,
            rating: 4.9,
            image: '23.jpg',
            images: [
                '23.jpg',
            ],
            link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/'
        },
    ]);

    getProducts() { return this.products }

    deleteProduct(id : number) {
        const isConfirm = confirm("Вы точно хотите удалить этот товар?");

        if (isConfirm) {
            this.products.update(ps => ps.filter(p => p.id !== id));
            if (this.products.length === 0) {
                
            }
        }
    }

    likeProduct(id : number) {
        this.products.update(ps => ps.map(
            p => p.id === id ? {...p, likes: p.likes + 1} : p
        ))
    }
}