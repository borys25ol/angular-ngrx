import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'

import { AppComponent } from './app.component'
import { shoppingReducer } from './store/reducers/shopping.reducer'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ shopping: shoppingReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
