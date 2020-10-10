import { ShoppingItemInterface } from '../../types/shopping-item.interface'
import { Action, createReducer, on } from '@ngrx/store'

import {
  addItemAction,
  ShoppingActionTypes,
} from '../actions/shopping.actions'
import { AppStateInterface } from '../../types/app-state.interface'

const initialState: Array<ShoppingItemInterface> = [
  {
    id: '624c72c0-c699-4616-b04b-9bed14e554bc',
    name: 'Test Product Name 1',
  },
  {
    id: '8ba5b620-d494-4e24-b970-b94020eb2839',
    name: 'Test Product Name 2',
  },
]

const shoppingReducer = createReducer(
  initialState,
  on(
    addItemAction,
    (state, action): Array<ShoppingItemInterface> => {
      return [...state, action.shoppingItem]
    }
  )
)

export function reducer(state: Array<ShoppingItemInterface>, action: Action) {
  return shoppingReducer(state, action)
}
