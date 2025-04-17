import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { ProductService } from "../../services/product.service"

interface Product {
  id: string
  image: string
  name: string
  brand: string
  visible: boolean
  price: number
  sku: string
}

@Component({
  selector: "app-products",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center space-x-2">
          <h1 class="text-2xl font-bold">Products</h1>
          <div class="text-sm text-gray-400 bg-[#242426] rounded-full px-2">{{ products.length }}</div>
        </div>
        <button class="bg-[#f59f0a] hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
          New product
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div class="bg-[#171717] rounded-lg p-6">
          <div class="flex items-center space-x-3 text-amber-500 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 class="font-medium">Products</h3>
          </div>
          <div class="text-3xl font-bold">49</div>
        </div>
        
        <div class="bg-[#171717] rounded-lg p-6">
          <div class="flex items-center space-x-3 text-amber-500 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <h3 class="font-medium">Product Inventory</h3>
          </div>
          <div class="text-3xl font-bold">254</div>
        </div>
        
        <div class="bg-[#171717] rounded-lg p-6">
          <div class="flex items-center space-x-3 text-amber-500 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="font-medium">Average price</h3>
          </div>
          <div class="text-3xl font-bold">245.61</div>
        </div>
      </div>
      
      <div class="bg-[#171717] rounded-lg mb-6">
        <div class="p-4 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="flex items-center space-x-2">
              <button class="bg-[#242426] hover:bg-gray-600 text-white p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div class="relative">
            <input 
              type="text" 
              placeholder="Search" 
              class="bg-[#242426] text-white text-sm rounded-md px-3 py-2 pl-8 w-64 focus:outline-none focus:ring-1 focus:ring-gray-500"
            >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400 absolute left-2.5 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                <th class="p-4 w-8">
                  <input type="checkbox" class="rounded bg-[#242426] border-gray-600 text-amber-500 focus:ring-amber-500">
                </th>
                <th class="p-4 w-16">Image</th>
                <th class="p-4">
                  <button class="flex items-center space-x-1">
                    <span>Name</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </th>
                <th class="p-4">
                  <button class="flex items-center space-x-1">
                    <span>Brand</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </th>
                <th class="p-4">
                  <button class="flex items-center space-x-1">
                    <span>Visibility</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </th>
                <th class="p-4">
                  <button class="flex items-center space-x-1">
                    <span>Price</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </th>
                <th class="p-4">
                  <button class="flex items-center space-x-1">
                    <span>SKU</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-700">
              <tr *ngFor="let product of products" class="hover:bg-[#242426]">
                <td class="p-4">
                  <input type="checkbox" class="rounded bg-[#242426] border-gray-600 text-amber-500 focus:ring-amber-500">
                </td>
                <td class="p-4">
                  <img [src]="product.image" alt="Product" class="h-10 w-10 rounded object-cover">
                </td>
                <td class="p-4">{{ product.name }}</td>
                <td class="p-4">{{ product.brand }}</td>
                <td class="p-4">
                  <span *ngIf="product.visible" class="text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span *ngIf="!product.visible" class="text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </td>
                <td class="p-4">{{ product.price.toFixed(2) }}</td>
                <td class="p-4">{{ product.sku }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ProductsComponent implements OnInit {
  products: Product[] = []

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }
}
