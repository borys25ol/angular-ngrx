import { ShoppingItemInterface } from './shopping-item.interface'
import { ShoppingStateInterface } from './shopping-state.interface'

export interface AppStateInterface {
  readonly shopping: ShoppingStateInterface
}
