import { ShoppingItemInterface } from './shopping-item.interface'

export interface ShoppingStateInterface {
  list: Array<ShoppingItemInterface>
  loading: boolean
  error: Error
}
