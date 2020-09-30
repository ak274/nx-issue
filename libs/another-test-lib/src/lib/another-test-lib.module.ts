import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromOrders from './+state/orders.reducer';
import { OrdersEffects } from './+state/orders.effects';
import { OrdersFacade } from './+state/orders.facade';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: OrdersComponent },
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),

    StoreModule.forFeature(fromOrders.ORDERS_FEATURE_KEY, fromOrders.reducer),

    EffectsModule.forFeature([OrdersEffects]),
  ],
  providers: [OrdersFacade],
  declarations: [OrdersComponent],
})
export class AnotherTestLibModule {}
