import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AppStateInterface } from '../../types/app-state.interface'
import { ShoppingItemInterface } from '../../types/shopping-item.interface'
import { ShoppingStateInterface } from '../../types/shopping-state.interface'

export const shoppingFeatureSelector = createFeatureSelector<
  AppStateInterface,
  ShoppingStateInterface
>('shopping')

export const shoppingListSelector = createSelector(
  shoppingFeatureSelector,
  (shoppingState) => shoppingState.list
)

export const shoppingLoadingSelector = createSelector(
  shoppingFeatureSelector,
  (shoppingState) => shoppingState.loading
)

export const shoppingErrorSelector = createSelector(
  shoppingFeatureSelector,
  (shoppingState) => shoppingState.error
)
