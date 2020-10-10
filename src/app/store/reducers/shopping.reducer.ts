import { Action, createReducer, on } from '@ngrx/store'

import { ShoppingItemInterface } from '../../types/shopping-item.interface'
import {
  addItemAction,
  deleteItemAction,
  loadShoppingAction,
  loadShoppingFailureAction,
  loadShoppingSuccessAction,
} from '../actions/shopping.actions'
import { ShoppingStateInterface } from '../../types/shopping-state.interface'

const initialState: ShoppingStateInterface = {
  list: [],
  loading: null,
  error: undefined,
}

const shoppingReducer = createReducer(
  initialState,
  on(
    loadShoppingAction,
    (state): ShoppingStateInterface => ({
      ...state,
      loading: true,
    })
  ),
  on(
    loadShoppingSuccessAction,
    (state, action): ShoppingStateInterface => ({
      ...state,
      list: action.list,
      loading: false,
    })
  ),
  on(
    loadShoppingFailureAction,
    (state, action): ShoppingStateInterface => ({
      ...state,
      error: action.error,
      loading: false,
    })
  )
)

export function reducer(state: ShoppingStateInterface, action: Action) {
  return shoppingReducer(state, action)
}
