import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private products = [
    {
      id: "1",
      image: "/placeholder.svg?height=40&width=40",
      name: "Distributed scalable systemengine",
      brand: "Buckridge and Sons",
      visible: true,
      price: 216.51,
      sku: "57754673",
    },
    {
      id: "2",
      image: "/placeholder.svg?height=40&width=40",
      name: "Managed real-time implementation",
      brand: "Stroman-Daniel",
      visible: true,
      price: 102.87,
      sku: "41739761",
    },
    {
      id: "3",
      image: "/placeholder.svg?height=40&width=40",
      name: "Organic 6thgeneration flexibility",
      brand: "Champlin Inc",
      visible: false,
      price: 247.93,
      sku: "16118362",
    },
    {
      id: "4",
      image: "/placeholder.svg?height=40&width=40",
      name: "Balanced eco-centric encoding",
      brand: "Fadel Group",
      visible: true,
      price: 381.07,
      sku: "08951632",
    },
    {
      id: "5",
      image: "/placeholder.svg?height=40&width=40",
      name: "Multi-layered full-range functionalities",
      brand: "Effertz-Larkin",
      visible: true,
      price: 138.03,
      sku: "74114184",
    },
    {
      id: "6",
      image: "/placeholder.svg?height=40&width=40",
      name: "Cross-platform mobile flexibility",
      brand: "Hegmann, Hand and Kulas",
      visible: false,
      price: 317.13,
      sku: "51781750",
    },
  ]

  constructor() {}

  getProducts() {
    return this.products
  }

  getProduct(id: string) {
    return this.products.find((product) => product.id === id)
  }
}
