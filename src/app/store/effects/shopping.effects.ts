import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'

import {
  loadShoppingAction,
  loadShoppingFailureAction,
  loadShoppingSuccessAction,
} from '../actions/shopping.actions'
import { ShoppingService } from '../../shopping.service'
import { ShoppingStateInterface } from '../../types/shopping-state.interface'
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

  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {}
}
