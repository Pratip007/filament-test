import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { ChartComponent } from "../../components/chart/chart.component"

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [CommonModule, FormsModule, ChartComponent],
  template: `
    <div>
      <h1 class="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div class="bg-[#242426] rounded-lg p-6 mb-6">
        <div class="flex items-center justify-between mb-4">
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-1">Business customers only</label>
            <select class="bg-[#242426] border border-gray-600 text-white rounded-md px-3 py-2 w-64">
              <option>-</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          
          <div class="flex space-x-4">
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-1">Start date</label>
              <input type="date" class="bg-[#242426] border border-gray-600 text-white rounded-md px-3 py-2">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-1">End date</label>
              <input type="date" class="bg-[#242426] border border-gray-600 text-white rounded-md px-3 py-2">
            </div>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div class="bg-[#242426] rounded-lg p-6 flex items-center justify-between">
          <div>
            <div class="flex items-center space-x-4">
              <div class="bg-[#242426] h-12 w-12 rounded-full flex items-center justify-center text-lg font-medium">
                DU
              </div>
              <div>
                <h2 class="font-bold">Welcome</h2>
                <p class="text-gray-400">Demo User</p>
              </div>
            </div>
          </div>
          <button class="flex items-center space-x-1 bg-[#242426] hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Sign out</span>
          </button>
        </div>
        
        <div class="bg-[#242426] rounded-lg p-6 flex items-center justify-between">
          <div>
            <h2 class="font-bold text-2xl">filament</h2>
            <p class="text-gray-400">v3.2.123</p>
          </div>
          <div class="flex space-x-3">
            <button class="flex items-center space-x-1 bg-[#242426] hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Documentation</span>
            </button>
            <button class="flex items-center space-x-1 bg-[#242426] hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span>GitHub</span>
            </button>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div class="bg-[#242426] rounded-lg p-6">
          <h3 class="text-gray-400 font-medium mb-2">Revenue</h3>
          <div class="flex items-baseline">
            <span class="text-3xl font-bold">$192.10k</span>
            <span class="ml-2 text-sm text-green-500">32k increase</span>
          </div>
          <div class="mt-4 h-12">
            <svg viewBox="0 0 100 20" class="w-full h-full">
              <path d="M0,10 Q25,5 50,10 T100,10" fill="none" stroke="#10b981" stroke-width="2" />
            </svg>
          </div>
        </div>
        
        <div class="bg-[#242426] rounded-lg p-6">
          <h3 class="text-gray-400 font-medium mb-2">New customers</h3>
          <div class="flex items-baseline">
            <span class="text-3xl font-bold">1.34k</span>
            <span class="ml-2 text-sm text-red-500">3% decrease</span>
          </div>
          <div class="mt-4 h-12">
            <svg viewBox="0 0 100 20" class="w-full h-full">
              <path d="M0,10 Q25,15 50,10 T100,10" fill="none" stroke="#ef4444" stroke-width="2" />
            </svg>
          </div>
        </div>
        
        <div class="bg-[#242426] rounded-lg p-6">
          <h3 class="text-gray-400 font-medium mb-2">New orders</h3>
          <div class="flex items-baseline">
            <span class="text-3xl font-bold">3.54k</span>
            <span class="ml-2 text-sm text-green-500">7% increase</span>
          </div>
          <div class="mt-4 h-12">
            <svg viewBox="0 0 100 20" class="w-full h-full">
              <path d="M0,10 Q25,5 50,10 T100,10" fill="none" stroke="#10b981" stroke-width="2" />
            </svg>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-[#242426] rounded-lg p-6">
          <h3 class="font-medium mb-4">Orders per month</h3>
          <div class="h-64">
            <app-chart [chartData]="ordersChartData" [chartType]="'line'"></app-chart>
          </div>
        </div>
        
        <div class="bg-[#242426] rounded-lg p-6">
          <h3 class="font-medium mb-4">Total customers</h3>
          <div class="h-64">
            <app-chart [chartData]="customersChartData" [chartType]="'line'"></app-chart>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class DashboardComponent implements OnInit {
  ordersChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Orders",
        data: [2000, 3000, 4500, 3500, 4800, 5500, 6500, 7500, 8800, 7500, 9000, 8500],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245, 158, 11, 0.1)",
        tension: 0.4,
      },
    ],
  }

  customersChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Customers",
        data: [4000, 5500, 6500, 7500, 8500, 9000, 9500, 10000, 11000, 13000, 14500, 17000],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245, 158, 11, 0.1)",
        tension: 0.4,
      },
    ],
  }

  ngOnInit(): void {}
}
