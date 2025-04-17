import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
// Change from:
// import type { CategoryService } from "../../services/category.service"
// to:
import { CategoryService } from "../../services/category.service"

interface Category {
  id: string
  name: string
  slug: string
  visible: boolean
  lastUpdated: string
}

@Component({
  selector: "app-categories",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-bold">Categories</h1>
        <div class="flex space-x-3">
          <button class="bg-[#242426] hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Import categories
          </button>
          <button class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
            New category
          </button>
        </div>
      </div>
      
      <div class="bg-[#17171a] rounded-lg mb-6">
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
                    <span>Slug</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </th>
                <th class="p-4">Visibility</th>
                <th class="p-4">Last Updated</th>
                <th class="p-4">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-700">
              <tr *ngFor="let category of categories" class="hover:bg-[#242426]">
                <td class="p-4">
                  <input type="checkbox" class="rounded bg-[#242426] border-gray-600 text-amber-500 focus:ring-amber-500">
                </td>
                <td class="p-4">{{ category.name }}</td>
                <td class="p-4">{{ category.slug }}</td>
                <td class="p-4">
                  <span *ngIf="category.visible" class="text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span *ngIf="!category.visible" class="text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </td>
                <td class="p-4">{{ category.lastUpdated }}</td>
                <td class="p-4">
                  <div class="flex space-x-2">
                    <button class="text-gray-400 hover:text-[#f59f0a]">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button class="text-gray-400 hover:text-[#f59f0a]">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button class="text-gray-400 hover:text-[#f59f0a]">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="p-4 flex items-center justify-between text-sm">
          <div>Showing 1 to 10 of 397 results</div>
          <div class="flex items-center space-x-2">
            <div>Per page</div>
            <select class="bg-[#242426] border border-gray-600 text-white rounded-md px-2 py-1">
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
            
            <div class="flex">
              <button class="bg-[#242426] hover:bg-gray-600 text-white px-3 py-1 rounded-l-md">1</button>
              <button class="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1">2</button>
              <button class="bg-[#242426] hover:bg-gray-600 text-white px-3 py-1">3</button>
              <button class="bg-[#242426] hover:bg-gray-600 text-white px-3 py-1">4</button>
              <button class="bg-[#242426] hover:bg-gray-600 text-white px-3 py-1">...</button>
              <button class="bg-[#242426] hover:bg-gray-600 text-white px-3 py-1">39</button>
              <button class="bg-[#242426] hover:bg-gray-600 text-white px-3 py-1">40</button>
              <button class="bg-[#242426] hover:bg-gray-600 text-white px-3 py-1 rounded-r-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = []

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories()
  }
}
