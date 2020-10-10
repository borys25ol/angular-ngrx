import { Action, createAction, props } from '@ngrx/store'

import { ShoppingItemInterface } from '../../types/shopping-item.interface'

export enum ShoppingActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item',
}

export const addItemAction = createAction(
  ShoppingActionTypes.ADD_ITEM,
  props<{ shoppingItem: ShoppingItemInterface }>()
)
