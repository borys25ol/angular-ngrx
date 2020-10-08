import { ShoppingItem } from './shopping-item.interface'

export interface AppState {
  readonly shopping: Array<ShoppingItem>
}
