import { ShoppingItemInterface } from './shopping-item.interface'

export interface AppStateInterface {
  readonly shopping: Array<ShoppingItemInterface>
}
