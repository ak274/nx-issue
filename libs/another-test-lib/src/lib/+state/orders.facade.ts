import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromOrders from './orders.reducer';
import * as OrdersSelectors from './orders.selectors';

@Injectable()
export class OrdersFacade {
  loaded$ = this.store.pipe(select(OrdersSelectors.getOrdersLoaded));
  allOrders$ = this.store.pipe(select(OrdersSelectors.getAllOrders));
  selectedOrders$ = this.store.pipe(select(OrdersSelectors.getSelected));

  constructor(private store: Store<fromOrders.OrdersPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
