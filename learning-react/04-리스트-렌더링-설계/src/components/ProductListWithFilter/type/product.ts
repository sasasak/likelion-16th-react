import type { Dispatch, SetStateAction } from "react"

export interface Product {
  id: number
  name: string
  price: number
  isSoldOut: boolean
}

export interface ProductSearchProps {
  searchQuery: string
  setSearchQuery: Dispatch<SetStateAction<string>>
}