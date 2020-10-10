import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AppStateInterface } from '../../types/app-state.interface'
import { ShoppingItemInterface } from '../../types/shopping-item.interface'

export const shoppingFeatureSelector = createFeatureSelector<
  AppStateInterface,
  Array<ShoppingItemInterface>
>('shopping')

export const shoppingSelector = createSelector(
  shoppingFeatureSelector,
  (shoppingState) => shoppingState
)
