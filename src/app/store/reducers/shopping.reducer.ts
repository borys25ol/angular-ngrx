import { ShoppingItem } from '../../types/shopping-item.interface'
import { ShoppingAction, ShoppingActionTypes } from '../actions/shopping.actions'

const initialState: Array<ShoppingItem> = [
  {
    id: '624c72c0-c699-4616-b04b-9bed14e554bc',
    name: 'Test Product Name 1',
  },
  {
    id: '8ba5b620-d494-4e24-b970-b94020eb2839',
    name: 'Test Product Name 2',
  },
]

export function shoppingReducer(
  state: Array<ShoppingItem> = initialState,
  action: ShoppingAction
) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload]

    default:
      return state
  }
}
