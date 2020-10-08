import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

import { AppState } from './types/app-state.interface'
import { Observable } from 'rxjs'
import { ShoppingItem } from './types/shopping-item.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  shoppingItems$: Observable<Array<ShoppingItem>>

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues(): void {
    this.shoppingItems$ = this.store.select((store) => store.shopping)
  }
}
