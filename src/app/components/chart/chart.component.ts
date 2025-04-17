import { Component, Input, type OnInit, type AfterViewInit, type ElementRef, ViewChild } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-chart",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full h-full">
      <canvas #chartCanvas></canvas>
    </div>
  `,
  styles: [],
})
export class ChartComponent implements OnInit, AfterViewInit {
  @ViewChild("chartCanvas") chartCanvas!: ElementRef<HTMLCanvasElement>
  @Input() chartData: any
  @Input() chartType = "line"

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.renderChart()
  }

  renderChart(): void {
    const canvas = this.chartCanvas.nativeElement
    const ctx = canvas.getContext("2d")

    if (!ctx) return

    // This is a simplified chart rendering function
    // In a real application, you would use a proper charting library like Chart.js

    const width = canvas.width
    const height = canvas.height

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw chart based on type and data
    if (this.chartType === "line") {
      this.drawLineChart(ctx, width, height)
    }
  }

  drawLineChart(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    const data = this.chartData.datasets[0].data
    const labels = this.chartData.labels
    const maxValue = Math.max(...data) * 1.1

    const xStep = width / (labels.length - 1)
    const yStep = height / maxValue

    // Draw axes
    ctx.strokeStyle = "#4b5563"
    ctx.beginPath()
    ctx.moveTo(0, height)
    ctx.lineTo(width, height)
    ctx.stroke()

    // Draw data line
    ctx.strokeStyle = this.chartData.datasets[0].borderColor
    ctx.lineWidth = 2
    ctx.beginPath()

    data.forEach((value: number, index: number) => {
      const x = index * xStep
      const y = height - value * yStep

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Draw points
    ctx.fillStyle = this.chartData.datasets[0].borderColor

    data.forEach((value: number, index: number) => {
      const x = index * xStep
      const y = height - value * yStep

      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fill()
    })
  }
}
