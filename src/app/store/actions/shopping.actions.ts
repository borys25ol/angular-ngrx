import { Action } from '@ngrx/store'

import { ShoppingItem } from '../../types/shopping-item.interface'

export enum ShoppingActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item'
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM

  constructor(public payload: ShoppingItem) {
  }
}

export type ShoppingAction = AddItemAction
