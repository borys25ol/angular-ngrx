import { createAction, props } from '@ngrx/store'

import { ShoppingItemInterface } from '../../types/shopping-item.interface'

export enum ShoppingActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item',
  DELETE_ITEM = '[SHOPPING] Delete Item',
}

export const addItemAction = createAction(
  ShoppingActionTypes.ADD_ITEM,
  props<{ shoppingItem: ShoppingItemInterface }>()
)

export const deleteItemAction = createAction(
  ShoppingActionTypes.DELETE_ITEM,
  props<{ id: string }>()
)
