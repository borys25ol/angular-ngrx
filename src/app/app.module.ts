import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects'

import { AppComponent } from './app.component'
import { reducer } from './store/reducers/shopping.reducer'
import { environment } from '../environments/environment'
import { ShoppingService } from './shopping.service'
import { ShoppingEffects } from './store/effects/shopping.effects'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ shopping: reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([ShoppingEffects]),
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
