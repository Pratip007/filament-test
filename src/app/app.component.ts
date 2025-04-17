import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { SidebarComponent } from "./components/sidebar/sidebar.component"
import { HeaderComponent } from "./components/header/header.component"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, CommonModule],
  template: `
    <div class="min-h-screen bg-[#08080a] text-white flex flex-col lg:flex-row">
      <app-sidebar class="hidden lg:block"></app-sidebar>
      <div class="flex-1 flex flex-col">
        <app-header></app-header>
        <main class="flex-1 p-4 lg:p-6 bg-[#08080a]">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "filament-admin"
}
