import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'

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
import { ShoppingService } from '../../shopping.service'
import { ShoppingItemInterface } from '../../types/shopping-item.interface'

@Injectable()
export class ShoppingEffects {
  loadShopping$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadShoppingAction),
      mergeMap(() =>
        this.shoppingService.getShoppingItems().pipe(
          map((data: Array<ShoppingItemInterface>) => {
            return loadShoppingSuccessAction({ list: data })
          }),
          catchError((error) => of(loadShoppingFailureAction({ error })))
        )
      )
    )
  )

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addItemAction),
      mergeMap(({ shoppingItem }) =>
        this.shoppingService.addShoppingItem(shoppingItem).pipe(
          map((data: ShoppingItemInterface) => {
            return addItemSuccessAction({ shoppingItem: data })
          }),
          catchError((error) => of(addItemFailureAction({ error })))
        )
      )
    )
  )

  deleteItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteItemAction),
      mergeMap(({ id }) =>
        this.shoppingService.deleteShoppingItem(id).pipe(
          map(() => {
            return deleteItemSuccessAction({ id })
          }),
          catchError((error) => of(deleteItemFailureAction({ error })))
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {}
}
