import { Component } from "@angular/core"
import { RouterLink, RouterLinkActive } from "@angular/router"

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="bg-white shadow-md">
      <div class="container mx-auto px-4">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <a routerLink="/" class="text-xl font-bold text-gray-800">Angular App</a>
          </div>
          <div class="flex items-center">
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a 
                  routerLink="/" 
                  routerLinkActive="text-blue-600 border-b-2 border-blue-600" 
                  [routerLinkActiveOptions]="{exact: true}"
                  class="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Home
                </a>
                <a 
                  routerLink="/about" 
                  routerLinkActive="text-blue-600 border-b-2 border-blue-600"
                  class="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  About
                </a>
                <a 
                  routerLink="/contact" 
                  routerLinkActive="text-blue-600 border-b-2 border-blue-600"
                  class="px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div class="md:hidden flex items-center">
            <button 
              (click)="toggleMobileMenu()" 
              class="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path *ngIf="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                <path *ngIf="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div *ngIf="isMobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            routerLink="/" 
            routerLinkActive="bg-blue-50 text-blue-600" 
            [routerLinkActiveOptions]="{exact: true}"
            class="block px-3 py-2 rounded-md text-base font-medium"
            (click)="closeMobileMenu()"
          >
            Home
          </a>
          <a 
            routerLink="/about" 
            routerLinkActive="bg-blue-50 text-blue-600"
            class="block px-3 py-2 rounded-md text-base font-medium"
            (click)="closeMobileMenu()"
          >
            About
          </a>
          <a 
            routerLink="/contact" 
            routerLinkActive="bg-blue-50 text-blue-600"
            class="block px-3 py-2 rounded-md text-base font-medium"
            (click)="closeMobileMenu()"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavbarComponent {
  isMobileMenuOpen = false

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false
  }
}
