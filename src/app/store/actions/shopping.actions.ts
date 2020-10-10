import { createAction, props } from '@ngrx/store'

import { ShoppingItemInterface } from '../../types/shopping-item.interface'

export enum ShoppingActionTypes {
  LOAD_SHOPPING = '[SHOPPING] Load Shopping',
  LOAD_SHOPPING_SUCCESS = '[SHOPPING] Load Shopping Success',
  LOAD_SHOPPING_FAILURE = '[SHOPPING] Load Shopping Failure',
  ADD_ITEM = '[SHOPPING] Add Item',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
  DELETE_ITEM = '[SHOPPING] Delete Item',
  DELETE_ITEM_SUCCESS = '[SHOPPING] Delete Item Success',
  DELETE_ITEM_FAILURE = '[SHOPPING] Delete Item Failure',
}

export const loadShoppingAction = createAction(
  ShoppingActionTypes.LOAD_SHOPPING
)
export const loadShoppingSuccessAction = createAction(
  ShoppingActionTypes.LOAD_SHOPPING_SUCCESS,
  props<{ list: Array<ShoppingItemInterface> }>()
)
export const loadShoppingFailureAction = createAction(
  ShoppingActionTypes.LOAD_SHOPPING_FAILURE,
  props<{ error: Error }>()
)

export const addItemAction = createAction(
  ShoppingActionTypes.ADD_ITEM,
  props<{ shoppingItem: ShoppingItemInterface }>()
)
export const addItemSuccessAction = createAction(
  ShoppingActionTypes.ADD_ITEM_SUCCESS,
  props<{ shoppingItem: ShoppingItemInterface }>()
)
export const addItemFailureAction = createAction(
  ShoppingActionTypes.ADD_ITEM_FAILURE,
  props<{ error: Error }>()
)

export const deleteItemAction = createAction(
  ShoppingActionTypes.DELETE_ITEM,
  props<{ id: string }>()
)
export const deleteItemSuccessAction = createAction(
  ShoppingActionTypes.DELETE_ITEM_SUCCESS,
  props<{ id: string }>()
)
export const deleteItemFailureAction = createAction(
  ShoppingActionTypes.DELETE_ITEM_FAILURE,
  props<{ error: Error }>()
)
