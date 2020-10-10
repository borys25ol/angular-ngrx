import { Action, createReducer, on } from '@ngrx/store'

import {
  addItemAction,
  addItemFailureAction,
  addItemSuccessAction,
  deleteItemAction,
  deleteItemFailureAction,
  deleteItemSuccessAction,
  loadShoppingAction,
  loadShoppingFailureAction,
  loadShoppingSuccessAction,
} from '../actions/shopping.actions'
import { ShoppingStateInterface } from '../../types/shopping-state.interface'

const initialState: ShoppingStateInterface = {
  list: [],
  loading: null,
  error: null,
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
  ),
  on(
    addItemAction,
    (state): ShoppingStateInterface => ({
      ...state,
      loading: true,
    })
  ),
  on(
    addItemSuccessAction,
    (state, action): ShoppingStateInterface => ({
      ...state,
      list: [...state.list, action.shoppingItem],
      loading: false,
    })
  ),
  on(
    addItemFailureAction,
    (state, action): ShoppingStateInterface => ({
      ...state,
      loading: false,
      error: action.error,
    })
  ),
  on(
    deleteItemAction,
    (state): ShoppingStateInterface => ({
      ...state,
      loading: true,
    })
  ),
  on(
    deleteItemSuccessAction,
    (state, action): ShoppingStateInterface => ({
      ...state,
      list: state.list.filter((item) => item.id !== action.id),
      loading: false,
    })
  ),
  on(
    deleteItemFailureAction,
    (state, action): ShoppingStateInterface => ({
      ...state,
      loading: false,
      error: action.error,
    })
  )
)

export function reducer(state: ShoppingStateInterface, action: Action) {
  return shoppingReducer(state, action)
}
