import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { v4 as uuid } from 'uuid'

import { AppStateInterface } from './types/app-state.interface'
import { Observable } from 'rxjs'
import { ShoppingItemInterface } from './types/shopping-item.interface'
import {
  addItemAction,
  deleteItemAction,
  loadShoppingAction,
} from './store/actions/shopping.actions'
import {
  shoppingErrorSelector,
  shoppingListSelector,
  shoppingLoadingSelector,
} from './store/selectors/shopping.selector'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  shoppingItems$: Observable<Array<ShoppingItemInterface>>
  loading$: Observable<boolean>
  error$: Observable<Error>

  newShoppingItem: ShoppingItemInterface = { id: '', name: '' }

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.shoppingItems$ = this.store.pipe(select(shoppingListSelector))
    this.loading$ = this.store.pipe(select(shoppingLoadingSelector))
    this.error$ = this.store.pipe(select(shoppingErrorSelector))

    this.store.dispatch(loadShoppingAction())
  }

  addItem(): void {
    if (this.newShoppingItem.name.trim()) {
      this.newShoppingItem.id = uuid()
      this.store.dispatch(addItemAction({ shoppingItem: this.newShoppingItem }))
      this.newShoppingItem = { id: '', name: '' }
    }
  }

  deleteItem(id: string): void {
    this.store.dispatch(deleteItemAction({ id }))
  }
}
