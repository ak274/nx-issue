import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import * as fromOrders from './orders.reducer';
import * as OrdersActions from './orders.actions';

@Injectable()
export class OrdersEffects {
  loadOrders$ = createEffect(() =>
    this.dataPersistence.fetch(OrdersActions.loadOrders, {
      run: (
        action: ReturnType<typeof OrdersActions.loadOrders>,
        state: fromOrders.OrdersPartialState
      ) => {
        console.log('state',state);
        // Your custom service 'load' logic goes here. For now just return a success action...
        return OrdersActions.loadOrdersSuccess({ orders: [] });
      },

      onError: (action: ReturnType<typeof OrdersActions.loadOrders>, error) => {
        console.error('Error', error);
        return OrdersActions.loadOrdersFailure({ error });
      },
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<fromOrders.OrdersPartialState>
  ) {}
}
